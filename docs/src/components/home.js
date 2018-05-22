import React, { Component } from 'react';
import markdownUrl from './index.md';
import { Markdown } from '../vendor/doc-components';

export default class Home extends Component {
  render() {
    return (<Markdown markdownUrl={markdownUrl} />);
  }
}
