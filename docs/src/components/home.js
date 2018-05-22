import React, { Component } from 'react';
import markdownUrl from './index.md';

let Markdown;
if (typeof navigator !== 'undefined') {
  const docComponent = require('doc-components');
  Markdown = docComponent.Markdown;
}

export default class Home extends Component {
  render() {
    return (<Markdown markdownUrl={markdownUrl} />);
  }
}
