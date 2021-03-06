import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {
  render() {
    const {
      className = '',
      image,
      initials = '',
      style,
      nodeRef,
      ...props
    } = this.props;

    return (
      <div
        ref={nodeRef}
        className={`mt-avatar ${className}`}
        style={{
          '--mt-avatar-bg-image': image && `url('${image}')`,
          ...style,
        }}
        {...props}>
        {!image && <div className="mt-avatar_initials">{initials}</div>}
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
