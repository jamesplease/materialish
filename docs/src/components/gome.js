import React, { Component } from 'react';
import { Markdown } from 'doc-components';
import markdownUrl from './index.md';

export default class Home extends Component {
  render() {
    return (<Markdown markdownUrl={markdownUrl} />);
  }
}
