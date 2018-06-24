import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { Markdown } from '../vendor/doc-components';

export class Alternatives extends Component {
  render() {
    const { alternativesMarkdown } = this.props;

    return (
      <Markdown markdownText={alternativesMarkdown} className="editorialPage" />
    );
  }
}

export default withRouteData(Alternatives);
