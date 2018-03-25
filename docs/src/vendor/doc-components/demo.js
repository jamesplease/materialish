import React from 'react';
import PropTypes from 'prop-types';
import { fetchDedupe } from 'fetch-dedupe';
import Editor from './editor';
import Preview from './preview';
import codeTextUrl from './example.txt';

class Playground extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    scope: PropTypes.object
  };

  state = {
    code: null
  };

  handleCodeChange = code => {
    this.setState({ code });
  };

  loadCode(code) {
    this.refs.editor.setCode(code);
  }

  render() {
    const { scope } = this.props;
    const { code } = this.state;

    if (code === null) {
      return null;
    }

    return (
      <div className={this.props.className}>
        <Editor
          ref="editor"
          codeText={this.state.code}
          onChange={this.handleCodeChange}
        />
        <Preview code={this.state.code} scope={scope} />
      </div>
    );
  }

  componentDidMount() {
    fetchDedupe(codeTextUrl, { responseType: 'text' }).then(res => {
      this.setState({
        code: res.data
      });
    });
  }
}

export default Playground;
