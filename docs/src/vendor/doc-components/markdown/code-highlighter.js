import React, { Component } from 'react';
import Lowlight from 'react-lowlight';

export default class CodeHighlighter extends Component {
  render() {
    const { language, value, inline, ...rest } = this.props;

    return (
      <Lowlight
        language={language || 'js'}
        value={value}
        inline={inline}
        {...rest}
      />
    );
  }
}
