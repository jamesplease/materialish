import React, { Component } from 'react';
import _ from 'lodash';

export default class AnchorHeading extends Component {
  render() {
    const { children, level } = this.props;

    const tagname = `h${level}`;

    const value = _.get(children, '0', '');
    const isText = typeof value === 'string';

    let id;
    if (isText) {
      id = _.kebabCase(value);
    } else {
      id = _
        .chain(value)
        .get('props.value', '')
        .kebabCase()
        .value();
    }

    return React.createElement(tagname, { id }, children);
  }
}
