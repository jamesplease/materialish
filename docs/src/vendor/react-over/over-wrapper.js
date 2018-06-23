import React, { Component } from 'react';
import computePosition from './compute-position';
import getStyles from './get-styles';
import simpleShallowEquals from './simple-shallow-equals';

export default class OverWrapper extends Component {
  render() {
    const { children } = this.props;
    const { style } = this.state;

    return (
      <div style={style} ref={this.getRef}>
        {children}
      </div>
    );
  }

  state = {
    style: {
      position: 'fixed',
    },
  };

  getRef = ref => {
    this.el = ref;
  };

  componentDidMount() {
    const { config, targetEl } = this.props;

    this.positionElement();

    if (config.removeOnClickOutside) {
      document.addEventListener('click', this.onClickOutside);
    }

    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll, true);

    // If we have `closeOnScroll` configured, then we need to get the
    // initial position of the `targetEl`.
    // This is so that we can track the movement of the trigger element to
    // determine if we need to close the overelement, based on the scroll.
    if (targetEl && config.closeOnScroll) {
      const rect = this.getTargetElBoundingBox();

      this.initialPosition = {
        top: rect.top,
        left: rect.left,
      };
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const targetElChanged = this.props.targetEl !== nextProps.targetEl;
    const styleChanges = !simpleShallowEquals(
      this.state.style,
      nextState.style
    );
    return targetElChanged || styleChanges;
  }

  // Question: can the targetEl even change?
  componentDidUpdate(prevProps) {
    if (prevProps.targetEl !== this.props.targetEl) {
      this.positionElement();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside);
    window.removeEventListener('scroll', this.onScroll, true);
    window.removeEventListener('resize', this.onResize);
  }

  cachedOverBoundingBox = null;

  componentWillEnter(done) {
    const { config, triggerEl, targetEl } = this.props;

    if (!config.animation || !config.animation.componentWillEnter) {
      return done();
    }

    this.cachedOverBoundingBox = this.el.getBoundingClientRect();

    return config.animation.componentWillEnter({
      done,
      overEl: this.el,
      triggerEl,
      targetEl,
      positionObj: this.positionObj,
    });
  }

  componentDidEnter() {
    const { config, triggerEl, targetEl } = this.props;

    this.cachedOverBoundingBox = null;

    if (!config.animation || !config.animation.componentDidEnter) {
      return;
    }

    return config.animation.componentDidEnter({
      overEl: this.el,
      triggerEl,
      targetEl,
      positionObj: this.positionObj,
    });
  }

  componentWillLeave(done) {
    const { config, triggerEl, targetEl } = this.props;

    if (!config.animation || !config.animation.componentWillLeave) {
      return done();
    }

    this.cachedOverBoundingBox = this.el.getBoundingClientRect();

    return config.animation.componentWillLeave({
      done,
      triggerEl,
      targetEl,
      overEl: this.el,
      positionObj: this.positionObj,
    });
  }

  componentDidLeave() {
    const { config, triggerEl, targetEl } = this.props;

    this.cachedOverBoundingBox = null;

    if (!config.animation || !config.animation.componentDidLeave) {
      return;
    }

    return config.animation.componentDidLeave({
      overEl: this.el,
      triggerEl,
      targetEl,
      positionObj: this.positionObj,
    });
  }

  getTargetElBoundingBox = () => {
    const { targetEl } = this.props;

    return targetEl.getBoundingClientRect();
  };

  // There is a bug in this code, or at least how it is called. If it's called during
  // a transition, the transition will break.
  // We will likely need to append the styles rather than completely replace them,
  // or something like that.
  positionElement = () => {
    const { triggerEl, targetEl, config } = this.props;

    if (!triggerEl || !this.el) {
      return;
    }

    if (typeof config.position === 'function') {
      return config.position({ overEl: this.el, triggerEl, targetEl });
    }

    const targetBoundingBox = this.getTargetElBoundingBox();
    const overBoundingBox =
      this.cachedOverBoundingBox || this.el.getBoundingClientRect();

    const positionObj = computePosition({
      position: config.position,
      origin: config.origin,
      targetBoundingBox,
      overBoundingBox,
      config,
    });

    // Should this go onto component state?
    this.positionObj = positionObj;

    const newStyles = getStyles(positionObj);

    for (let attr in newStyles) {
      this.el.style[attr] = newStyles[attr];
    }

    this.setState(prevState => {
      return {
        style: {
          ...prevState.style,
          ...newStyles,
        },
      };
    });
  };

  onClickOutside = e => {
    const { close, config } = this.props;

    if (!this.el || this.el.contains(e.target)) {
      return;
    }

    close(config.id);
  };

  onScroll = e => {
    requestAnimationFrame(() => {
      const { config, targetEl, close, id } = this.props;
      const { closeOnScroll } = config;

      if (e.target.contains(targetEl)) {
        // This allows a user to specify a maximum acceptable distance before
        // the thing closes.
        if (typeof closeOnScroll === 'number') {
          const position = targetEl.getBoundingClientRect();

          const topChange = position.top - this.initialPosition.top;
          const leftChange = position.left - this.initialPosition.left;

          const totalChange = Math.sqrt(
            Math.pow(topChange, 2) - Math.pow(leftChange, 2)
          );

          // If the total movement of the trigger exceeds our limit,
          // then we close this overelement.
          if (totalChange > closeOnScroll) {
            close(id);
          }

          // Otherwise, we need to position the overelement
          else {
            this.positionElement();
          }
        }
        // If a truthy value was passed as closeOnScroll, then we close it
        else if (closeOnScroll) {
          close(id);
        }
        // Lastly, if they do not want to close on scroll, we must reposition the
        // element.
        else {
          this.positionElement();
        }
      }
    });
  };

  onResize = () => {
    requestAnimationFrame(() => {
      this.positionElement();
    });
  };
}
