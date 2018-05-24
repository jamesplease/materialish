import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    const { className = '', image, initials, ...props } = this.props;
    return (
      <div className={`mt-avatar ${className}`} {...props}>
        {image ? (
          <img className="mt-avatar_image" src={image} alt="" />
        ) : (
          <div className="mt-avatar_initials">{initials}</div>
        )}
      </div>
    );
  }
}

export default Avatar;
