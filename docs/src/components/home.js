import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { Markdown } from '../vendor/doc-components';

export class Home extends Component {
  render() {
    const {homeMarkdown} = this.props;

    return (<Markdown markdownText={homeMarkdown} />);
  }
}

export default withRouteData(Home);