import React, { createContext, Component } from 'react';
import ReactDOM from 'react-dom';
import TransitionGroupPlus from 'react-transition-group-plus';
import noScroll from 'no-scroll';
import Overlay from './overlay';
import OverWrapper from './over-wrapper';
import isValidTriggerElement from './is-valid-trigger-element';
import validateOverConfig from './validate-over-config';
import { warning } from './warning';

// Context is used here so that a single Portal can be used for every
// overelement in the application.
const OverContext = createContext();

// This Provider sets up the Portal, appending a new element to the
// body of the page.
// Then, it provides an API to Consumers to open and close overelements
// with that portal.
class Provider extends Component {
  render() {
    const { children } = this.props;

    return (
      <OverContext.Provider value={this.providerValue}>
        {children}
        {ReactDOM.createPortal(this.getPortalChild(), document.body)}
      </OverContext.Provider>
    );
  }

  constructor(...args) {
    super(...args);

    this.providerValue = {
      // Manually open an overelement (by passing a config object)
      open: this.open,
      // Manually close an overelement (by passing an ID)
      close: this.close,
      // A convenience API that manages opening and closing for you
      getOverProps: this.getOverProps,
    };
  }

  state = {
    // We keep track of how many overelements are currently visible that
    // are disabling scroll. Anytime that the count is > 0, scroll is disabled
    // on the page.
    // Typically, there will only ever be one element that prevents scroll
    // on the page, as they are frequently paired with an overlay. Nevertheless,
    // this logic _should_ catch any strange edge cases that exist.
    noScrollCount: 0,
    // This is a mapping of "descriptions". A description is an object that represents an
    // overelement that is currently visible. Within render, we loop the descriptions
    // and render overs.
    activeOverDescriptions: {},
  };

  getPortalChild = () => {
    const { activeOverDescriptions } = this.state;

    const overIds = Object.keys(activeOverDescriptions);

    // Within the portal, we use a transition group so that we can animate each of
    // the overlements individually.
    return (
      <TransitionGroupPlus style={{ zIndex: 2147483647 }}>
        {overIds.map(key => {
          // This is the configuration object for the component that we are about to render.
          const overDescription = activeOverDescriptions[key];

          // If we have no config, then this is an over's key that has been null'd. The config is
          // set to null when the Over is closed.
          if (!overDescription) {
            return null;
          }

          const onMouseEnter = overDescription.config.removeOnMouseOut
            ? () => this.onMouseEnterWrapper(overDescription.id)
            : undefined;

          const onMouseLeave = overDescription.config.removeOnMouseOut
            ? () => this.close(overDescription.id)
            : undefined;

          return [
            <Overlay
              config={overDescription.config.overlay}
              key={`${overDescription.id}-overlay`}
            />,
            <OverWrapper
              id={overDescription.id}
              key={overDescription.id}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              targetEl={overDescription.targetEl}
              triggerEl={overDescription.triggerEl}
              config={overDescription.config}
              close={this.close}>
              {overDescription.component}
            </OverWrapper>,
          ];
        })}
      </TransitionGroupPlus>
    );
  };

  // This is an object, where each key is an Over's ID.
  // They map to `setTimeouts`. Once the timeout ends, the Over
  // will be closed. This map is used for Overs that have a delay.
  componentsToCloseTimeouts = {};

  open = ({ triggerEl, targetEl, component, config }) => {
    if (!isValidTriggerElement(triggerEl)) {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          `You attempted to open a React Over element with an invalid triggerElement.` +
            ` triggerElements must be element nodes such as <div> or <p>.`,
          'INVALID_TRIGGER_EL_TO_OPEN'
        );
      }

      return;
    }

    if (
      targetEl &&
      (!isValidTriggerElement(targetEl) && typeof targetEl !== 'function')
    ) {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          `You attempted to open a React Over element with an invalid targetElement.` +
            ` targetElements must be element nodes such as <div> or <p>.`,
          'INVALID_TARGET_EL_TO_OPEN'
        );
      }

      return;
    }

    if (!React.isValidElement(component)) {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          `You attempted to open a React Over element with an invalid overelement.` +
            ` Over elements must be valid React elements.`,
          'INVALID_OVER_ELEMENT_TO_OPEN'
        );
      }

      return;
    }

    if (!validateOverConfig(config)) {
      return;
    }

    const id = config.id;

    // The first thing that we need to do if a component is attempted to be
    // opened is clear out any timeouts the close the component.
    clearInterval(this.componentsToCloseTimeouts[id]);

    // We may or may not need to update the state. The only way to know this is to
    // look at the previous state, so we go ahead and call `setState` to gain access
    // to the previous state.
    // Should we decide that we do not need to update state, we can return `undefined`.
    this.setState(prevState => {
      // If the component is already in our `activeOverDescriptions`, then we have nothing
      // to do. It is already open!
      if (prevState.activeOverDescriptions[id]) {
        return;
      }

      if (config.disableScroll) {
        // `noScroll.on()` is idempotent, so it is okay to call it even if the scroll
        // is already prevented.
        noScroll.on();
      }

      // We need to keep track of the number of Overs that want to prevent scroll.
      // When this count hits 0, we need to reenable it.
      const noScrollCount = config.disableScroll
        ? prevState.noScrollCount + 1
        : prevState.noScrollCount;

      let targetElement;
      if (typeof targetEl === 'function') {
        targetElement = targetEl();
      } else if (typeof targetEl !== 'undefined') {
        targetElement = targetEl;
      } else {
        targetElement = triggerEl;
      }

      return {
        noScrollCount,
        activeOverDescriptions: {
          ...prevState.activeOverDescriptions,
          [id]: {
            targetEl: targetElement,
            component,
            triggerEl,
            config,
            id,
          },
        },
      };
    });
  };

  close = id => {
    if (typeof id === 'undefined') {
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (typeof id !== 'string' && typeof id !== 'number') {
        warning(
          `You attempted to close an over with an invalid ID. Over IDs must be` +
            ` strings or numbers.`,
          'INVALID_ID_PASSED_TO_CLOSE'
        );
      }
    }

    const timeout = this.componentsToCloseTimeouts[id];

    // Note: timeout IDs are always positive integers. If we have
    // one, then this component is already in the process of
    // being closed, so there is nothing to do.
    if (timeout) {
      return;
    }

    this.setState(prevState => {
      const overDescription = prevState.activeOverDescriptions[id];
      const delay = (overDescription && overDescription.config.delay) || 0;

      if (!delay) {
        this.performOverClose(id);
      } else {
        this.componentsToCloseTimeouts[id] = setTimeout(() => {
          this.performOverClose(id);
        }, delay);
      }
    });
  };

  performOverClose = id => {
    // Because we plan to set state in here, we defensively add a `setTimeout` here.
    // Other functions may call this synchronously from within another `setState`,
    // which is not supported:
    // https://github.com/facebook/react/issues/8132#issuecomment-334169842
    setTimeout(() => {
      this.setState(
        prevState => {
          const overDescription = prevState.activeOverDescriptions[id];

          let noScrollCount;
          if (overDescription && overDescription.config.disableScroll) {
            noScrollCount = prevState.noScrollCount - 1;
          } else {
            noScrollCount = prevState.noScrollCount;
          }

          return {
            noScrollCount,
            activeOverDescriptions: {
              ...prevState.activeOverDescriptions,
              [id]: null,
            },
          };
        },
        () => {
          // We need to wipe out any existing timeouts for this ID.
          this.componentsToCloseTimeouts[id] = null;
          // Once we noScrollCount hits 0, we can reenable scrolling.
          if (this.state.noScrollCount === 0) {
            noScroll.off();
          }
        }
      );
    });
  };

  // If you mouse over an element that is configured to close on mouse out, then we
  // clear any existing timeout the close the element.
  onMouseEnterWrapper = id => {
    clearTimeout(this.componentsToCloseTimeouts[id]);
  };

  getOverProps = ({ type, ...config }, triggerProps = {}) => {
    if (type === 'hover') {
      return this.getHoverProps(config, triggerProps);
    } else if (type === 'click') {
      return this.getClickProps(config, triggerProps);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        if (typeof id === 'undefined') {
          warning(
            `You called getOverProps() with an invalid type. The valid types are` +
              ` "hover" and "click". You should check your calls to getOverProps().`,
            'INVALID_TYPE_TO_GET_OVER_PROPS'
          );
        }
      }
    }
  };

  getHoverProps = (
    { component, targetEl, ...config },
    { onMouseEnter, onMouseLeave, ...otherProps }
  ) => {
    const removeOnMouseOut =
      typeof config.removeOnMouseOut === 'boolean'
        ? config.removeOnMouseOut
        : true;

    const removeOnClickOutside =
      typeof config.removeOnClickOutside === 'boolean'
        ? config.removeOnClickOutside
        : false;

    return {
      ...otherProps,
      onMouseEnter: e => {
        this.open({
          targetEl,
          triggerEl: e.target,
          component,
          config: {
            removeOnMouseOut,
            removeOnClickOutside,
            id: config.id,
            ...config,
          },
        });

        if (typeof onMouseEnter === 'function') {
          onMouseEnter(e);
        }
      },
      onMouseLeave: e => {
        if (removeOnMouseOut) {
          this.close(config.id);
        }

        if (typeof onMouseLeave === 'function') {
          onMouseLeave(e);
        }
      },
    };
  };

  getClickProps = (
    { component, targetEl, ...config },
    { onClick, onMouseLeave, ...otherProps }
  ) => {
    const removeOnMouseOut =
      typeof config.removeOnMouseOut === 'boolean'
        ? config.removeOnMouseOut
        : false;

    const removeOnClickOutside =
      typeof config.removeOnClickOutside === 'boolean'
        ? config.removeOnClickOutside
        : true;

    return {
      ...otherProps,
      onClick: e => {
        // By default, click overs will close when you click them again. Should
        // this be a configuration option?
        if (this.state.activeOverDescriptions[config.id]) {
          this.close(config.id);
        }

        // If we reach this point, then the over is not open, so we open it.
        else {
          this.open({
            triggerEl: e.target,
            targetEl,
            component,
            config: {
              removeOnMouseOut,
              removeOnClickOutside,
              ...config,
            },
          });
        }

        if (typeof onClick === 'function') {
          onClick(e);
        }
      },
      onMouseLeave: e => {
        if (removeOnMouseOut) {
          this.close(config.id);
        }

        if (typeof onMouseLeave === 'function') {
          onMouseLeave(e);
        }
      },
    };
  };
}

export default {
  Consumer: OverContext.Consumer,
  Provider,
};
