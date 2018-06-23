import React, { Component } from 'react';
import { warning } from './warning';

const defaultColor = 'rgba(0, 0, 0, 0.7)';
const transition = 'opacity 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

// Overlays are optional backgrounds to the over.
// By default, overs do not have an overlay. There are
// three ways to configure one, all involving the value that you
// pass as the `overlay` option:
//
// 1. Pass a React Element to use that Element for the Overlay
// 2. Pass a string to set the background color for the overlay.
// 3. Pass a truthy value to use the default color
//

// TODO: Possibly allow the user to customize the transition for the default
// overlay. Maybe something like:
//
// {
//   overlay: {
//     color: '#000',
//     transitionDuration: '450ms'
//   }
// }
export default class Overlay extends Component {
  render() {
    const { config } = this.props;

    if (React.isValidElement(config)) {
      return config;
    } else if (!config) {
      return null;
    }

    let color;
    if (typeof config !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          `You passed an invalid value as overlay when configuring a React Over element.` +
            ` The overlay option must be a React Element or a string.`,
          'MISSING_CONFIG'
        );
      }

      color = defaultColor;
    } else {
      color = config || defaultColor;
    }

    return (
      <div
        ref={this.getRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: color,
        }}
      />
    );
  }

  componentWillEnter(cb) {
    if (!this.el) {
      return;
    }

    this.el.style.opacity = 0;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!this.el) {
          cb();
          return;
        }

        this.el.style.transition = transition;
        this.el.style.opacity = 1;
        cb();
      });
    });
  }

  componentWillLeave(cb) {
    if (!this.el) {
      cb();
      return;
    }

    this.el.style.transition = transition;
    this.el.style.opacity = 0;

    setTimeout(cb, 300);
  }

  getRef = ref => {
    this.el = ref;
  };
}
