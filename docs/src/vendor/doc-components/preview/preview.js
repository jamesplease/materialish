import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

const ERROR_TIMEOUT = 500;

export default class Preview extends Component {
  static propTypes = {
    className: PropTypes.string,
    code: PropTypes.string.isRequired,
    scope: PropTypes.object
  }

  static defaultProps = {
    className: "",
    scope: { React, Component }
  }

  state = {
    error: null
  };

  componentDidMount() {
    this.executeCode();
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  componentDidUpdate(prevProps) {
    clearTimeout(this.timeoutID);
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  }

  setTimeout = () => {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(...arguments);
  };

  compileCode = () => {
    const code = `
      (function (${Object.keys(this.props.scope).join(", ")}, mountNode) {
        ${this.props.code}
      });`;

    return transform(code, {
      presets: ['es2017', 'stage-3', 'react'],
    }).code;
  };

  buildScope = mountNode => {
    return Object.keys(this.props.scope)
      .map(key => {
        return this.props.scope[key];
      })
      .concat(mountNode);
  };

  executeCode = () => {
    const mountNode = this.refs.mount;
    const scope = this.buildScope(mountNode);

    try {
      ReactDOM.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }

    try {
      ReactDOM.render(eval(this.compileCode())(...scope), mountNode);
      if (this.state.error) {
        this.setState({ error: null });
      }
    } catch (err) {
      this.setTimeout(() => {
        this.setState({ error: err.toString() });
      }, ERROR_TIMEOUT);
    }
  };

  render() {
    const { className, wrapperStyle } = this.props;

    return (
      <div className={className}>
        {this.state.error !== null ? <span>{this.state.error}</span> : null}
        <div ref="mount" style={wrapperStyle} />
      </div>
    );
  }
}
