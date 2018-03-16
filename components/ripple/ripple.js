import React, { Component } from 'react';
import classnames from 'classnames';

export default class Ripple extends Component {
  render() {
    const { active, top, left } = this.state;
    const classname = classnames('mt-ripple', {
      'mt-ripple--active': active
    });

    const styles = {
      '--mt-ripple-top': top,
      '--mt-ripple-left': left
    };
    return <span style={styles} className={classname} onClick={this.onClick} />;
  }

  state = {
    active: false,
    top: 0,
    left: 0
  };

  componentDidMount() {
    this.setRipple(this.props.spread);
  }

  componentWillUnmount() {
    clearTimeout(this.activeTimeout);
  }

  componentWillReceiveProps(newProps) {
    this.setRipple(newProps.spread);
  }

  setRipple = spread => {
    if (this.el && spread) {
      this.el.style.setProperty('--mt-ripple-spread', spread);
    }
  };

  onClick = e => {
    const x = e.nativeEvent.layerX;
    const y = e.nativeEvent.layerY;

    this.setState({
      active: false,
      top: `${y}px`,
      left: `${x}px`
    });

    this.activeTimeout = setTimeout(() => {
      this.setState({
        active: true
      });
    }, 25);
  };
}
