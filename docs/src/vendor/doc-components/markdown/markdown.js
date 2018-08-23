import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchDedupe } from 'fetch-dedupe';
import CodeHighlighter from './code-highlighter';
import AnchorHeading from './anchor-heading';

export default class Markdown extends Component {
  render() {
    const markdownText = this.props.markdownText || this.state.markdownText;

    if (!markdownText) {
      return null;
    }

    return (
      <ReactMarkdown
        source={markdownText}
        className={`markdown ${this.props.className}`}
        renderers={{
          heading: AnchorHeading,
          code: CodeHighlighter,
        }}
      />
    );
  }

  state = {
    markdownText: null,
  };

  componentDidMount() {
    if (this.props.markdownUrl) {
      this.fetchMarkdown();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.markdownUrl !== nextProps.markdownUrl) {
      this.fetchMarkdown(nextProps);
    }
  }

  fetchMarkdown = props => {
    const { markdownUrl } = props || this.props;

    fetchDedupe(markdownUrl, { responseType: 'text' }).then(res => {
      this.setState({
        markdownText: res.data,
      });
    });
  };
}
