import React, { Component } from 'react';
import classnames from 'classnames';

class Ripple extends Component {
  render() {
    const { active, top, left } = this.state;

    const classname = classnames('mt-ripple', {
      'mt-ripple-active': active,
    });
    const styles = {
      '--mt-ripple-top': top,
      '--mt-ripple-left': left,
    };

    return <span style={styles} className={classname} onClick={this.onClick} aria-hidden="true"/>;
  }

  state = {
    active: false,
    top: 0,
    left: 0,
  };

  componentWillUnmount() {
    clearTimeout(this.activeTimeout);
  }

  onClick = e => {
    const wasMouseClick = e.nativeEvent.x && e.nativeEvent.y;
    const left = wasMouseClick ? `${e.nativeEvent.layerX}px` : '50%';
    const top = wasMouseClick ? `${e.nativeEvent.layerY}px` : '50%';

    this.setState({
      active: false,
      top,
      left,
    });

    this.activeTimeout = setTimeout(() => {
      this.setState({
        active: true,
      });
    }, 25);
  };
}

export default Ripple;
