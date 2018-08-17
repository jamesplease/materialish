import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';

const NavigationContext = React.createContext();

export default class Navigation extends Component {
  render() {
    const {
      className = '',
      children,
      centered = false,
      fullWidth = false,
      vertical = false,
      ripple,
      ...props
    } = this.props;

    return (
      <NavigationContext.Provider value={this.state}>
        <div
          className={`mt-navigation ${
            centered ? 'mt-navigation-centered' : ''
          } ${fullWidth ? 'mt-navigation-fullWidth' : ''} ${
            vertical ? 'mt-navigation-vertical' : ''
          } ${className}`}
          ref={this.getRef}
          {...props}>
          {children}
          <Tracker
            left={this.state.tracker.left}
            top={this.state.tracker.top}
            width={this.state.tracker.width}
            height={this.state.tracker.height}
          />
        </div>
      </NavigationContext.Provider>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      tracker: {
        left: 0,
        width: 0,
        height: 0,
        top: 0,
      },
      ripple:
        typeof props.ripple === 'undefined' ? true : Boolean(props.ripple),
      updateTrackerPosition: this.updateTrackerPosition,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.ripple !== nextProps.ripple) {
      return {
        ripple: nextProps.ripple,
      };
    }

    return null;
  }

  componentDidMount() {
    this.updateTrackerPosition();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    this.unmounted = true;
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    requestAnimationFrame(() => {
      if (!this.unmounted) {
        this.updateTrackerPosition();
      }
    });
  };

  getRef = el => {
    this.el = el;
  };

  updateTrackerPosition = () => {
    if (!this.el) return;
    const bb = this.el.getBoundingClientRect();
    const activeItem = this.el.querySelector('.mt-navigation_item-active');
    if (!activeItem) return;

    const targetBb = activeItem.getBoundingClientRect();

    this.setState({
      tracker: {
        left: targetBb.left - bb.left,
        top: targetBb.top - bb.top,
        width: targetBb.width,
        height: targetBb.height,
      },
    });
  };
}

Navigation.propTypes = {
  centered: PropTypes.bool,
  fullWidth: PropTypes.bool,
  vertical: PropTypes.bool,
  className: PropTypes.string,
  ripple: PropTypes.bool,
};

class Tracker extends PureComponent {
  render() {
    const { left, top, width, height } = this.props;

    return (
      <div
        className="mt-navigation_tracker"
        ref={this.getRef}
        style={{
          '--mt-tracker-left': `${left}px`,
          '--mt-tracker-top': `${top}px`,
          '--mt-tracker-width': `${width}px`,
          '--mt-tracker-height': `${height}px`,
        }}
      />
    );
  }

  getSnapshotBeforeUpdate() {
    if (this.el) {
      return this.el.getBoundingClientRect();
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && snapshot.width && this.el) {
      const bb = this.el.getBoundingClientRect();

      this.el.style.transition = 'none';
      this.el.style.transform = `translate3d(${snapshot.x -
        bb.x}px,${snapshot.y - bb.y}px,0) scale(${snapshot.width /
        bb.width}, ${snapshot.height / bb.height})`;
      requestAnimationFrame(() => {
        if (!this.el) return;
        this.el.style.transition = null;
        this.el.style.transform = null;
      });
    }
  }

  getRef = el => {
    this.el = el;
  };
}

class Item extends Component {
  render() {
    const {
      className = '',
      children,
      ripple = true,
      updateTrackerPosition,
      active,
      ...props
    } = this.props;

    return (
      <button
        href="#"
        className={`mt-navigation_item ${
          active ? 'mt-navigation_item-active' : ''
        } ${className}`}
        {...props}
        onClick={this.onClick}
        ref={this.getRef}>
        {children}
        {ripple && <Ripple ref={this.getRippleRef} />}
      </button>
    );
  }

  componentDidUpdate(prevProps) {
    const { active, updateTrackerPosition } = this.props;
    if (active && !prevProps.active) {
      updateTrackerPosition();
    }
  }

  getRippleRef = component => {
    this.rippleComponent = component;
  };

  onClick = e => {
    e.preventDefault();
    const { onClick } = this.props;

    if (this.rippleComponent) {
      this.rippleComponent.onClick(e);
    }

    if (onClick) {
      onClick(e);
    }
  };
}

Navigation.Item = props => (
  <NavigationContext.Consumer>
    {({ ripple, updateTrackerPosition }) => {
      return (
        <Item
          ripple={ripple}
          {...props}
          updateTrackerPosition={updateTrackerPosition}
        />
      );
    }}
  </NavigationContext.Consumer>
);

Navigation.Item.propTypes = {
  ripple: PropTypes.bool,
  className: PropTypes.string,
  active: PropTypes.bool,
};
