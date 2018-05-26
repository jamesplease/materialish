import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {
  render() {
    const { className = '', image, initials = '', ...props } = this.props;

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

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  initials: PropTypes.string,
};

export default Avatar;
