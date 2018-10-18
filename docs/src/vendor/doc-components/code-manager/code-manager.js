import React from 'react';
import PropTypes from 'prop-types';
import { fetchDedupe } from 'fetch-dedupe';
import { transform } from '@babel/standalone';

export default class CodeManager extends React.Component {
  render() {
    const { children } = this.props;
    const { compiledCode, err, inputCode } = this.state;

    if (inputCode === null) {
      return null;
    }

    return children({
      inputCode,
      compiledCode,
      err,
      handleCodeChange: this.handleCodeChange,
    });
  }

  static propTypes = {
    codeTextUrl: PropTypes.string,
  };

  static defaultProps = {
    codeTextUrl: null,
  };

  constructor(props) {
    super(props);

    let initialState = {};

    if (props.initialCode) {
      initialState = this.compileCode(this.props.initialCode);
    }

    this.state = initialState;
  }

  compileCode = inputCode => {
    const code = `
      (function (${Object.keys(this.props.scope).join(', ')}, mountNode) {
        ${inputCode}
      });`;

    const returnValue = {
      inputCode,
      compiledCode: null,
      err: null,
    };

    try {
      returnValue.compiledCode = transform(code, {
        presets: ['es2017', 'stage-3', 'react'],
      }).code;
    } catch (e) {
      returnValue.err = e;
    }

    return returnValue;
  };

  handleCodeChange = code => {
    this.setState(this.compileCode(code));
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.codeTextUrl !== nextProps.codeTextUrl) {
      if (nextProps.codeTextUrl) {
        this.fetchCode(nextProps);
      }
    }
  }

  componentDidMount() {
    if (this.props.codeTextUrl) {
      this.fetchCode();
    }
  }

  fetchCode = props => {
    const { codeTextUrl } = props || this.props;

    fetchDedupe(codeTextUrl, { responseType: 'text' }).then(res => {
      this.setState(this.compileCode(res.data));
    });
  };
}
