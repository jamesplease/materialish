import React, { Component } from 'react';
import './overlay.css';

export default class Overlay extends Component {
  render() {
    const {active, onClick} = this.props;
    return (
      <div className={`overlay ${active ? 'overlay-active' : ''}`} onClick={onClick}/>
    );
  }
}
