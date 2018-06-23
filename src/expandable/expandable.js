import React, { Component } from 'react';

export default class Expandable extends Component {
  render() {
    const { className = '', open = false, durationMs, ...props } = this.props;

    return (
      <div
        ref={this.getRef}
        className={`mt-expandable ${
          open ? 'mt-expandable-open' : ''
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
