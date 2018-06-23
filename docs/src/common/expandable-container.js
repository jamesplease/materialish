import React, { Component } from 'react';
import './expandable-container.css';

//
// Heads up!
// This will one day be a part of Materialish directly.
//
export default class ExpandableContainer extends Component {
  render() {
    const { className = '', open = false, ...props } = this.props;
    return (
      <div
        ref={this.getRef}
        className={`mt-expandableContainer ${
          open ? 'mt-expandableContainer-open' : ''
        } ${className}`}
        {...props}
      />
    );
  }

  getSnapshotBeforeUpdate() {
    return this.el ? this.el.getBoundingClientRect() : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && this.el) {
      if (prevProps.open !== this.props.open) {
        const { durationMs = 200 } = this.props;

        const bb = this.el.getBoundingClientRect();
        this.el.style.height = `${snapshot.height}px`;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.el.style.transition = `all ${durationMs}ms ease-out`;
            this.el.style.height = `${bb.height}px`;
            setTimeout(() => {
              this.el.style = '';
            }, durationMs);
          });
        });
      }
    }
  }

  getRef = el => {
    this.el = el;
  };
}
