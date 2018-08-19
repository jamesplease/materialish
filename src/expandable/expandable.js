import React, { Component } from 'react';

export default class Expandable extends Component {
  render() {
    const {
      className = '',
      durationMs,
      onTransitionEnd,
      onTransitionStart,
      nodeRef,
      ...props
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        ref={this.getRef}
        className={`mt-expandable ${
          isOpen ? 'mt-expandable-open' : ''
        } ${className}`}
        ref={nodeRef}
        {...props}
      />
    );
  }

  getSnapshotBeforeUpdate() {
    return this.el ? this.el.getBoundingClientRect() : null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.open,
      isOpenQueue: null,
      isAnimating: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // When the open prop differs from our previous state, then we either need to
    // start animating, or we need to queue the open
    if (nextProps.open !== prevState.isOpen) {
      if (prevState.isAnimating) {
        return {
          isOpenQueue: nextProps.open,
        };
      } else {
        return {
          isAnimating: true,
          isOpen: nextProps.open,
        };
      }
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && this.el) {
      if (prevState.isOpen !== this.state.isOpen) {
        const { durationMs = 200 } = this.props;

        const animationType = this.state.isOpen ? 'open' : 'close';

        if (this.props.onTransitionStart) {
          this.props.onTransitionStart(animationType);
        }

        const bb = this.el.getBoundingClientRect();
        this.el.style.height = `${snapshot.height}px`;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.el.style.transition = `all ${durationMs}ms ease-out`;
            this.el.style.height = `${bb.height}px`;

            setTimeout(() => {
              this.el.style = '';

              this.setState(
                {
                  isAnimating: false,
                },
                () => {
                  if (this.props.onTransitionEnd) {
                    this.props.onTransitionEnd(animationType);
                  }
                }
              );
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
