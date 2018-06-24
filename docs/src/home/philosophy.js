import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { Markdown } from '../vendor/doc-components';

export class Philosophy extends Component {
  render() {
    const { philosophyMarkdown } = this.props;

    return (
      <Markdown markdownText={philosophyMarkdown} className="editorialPage" />
    );
  }
}

export default withRouteData(Philosophy);
