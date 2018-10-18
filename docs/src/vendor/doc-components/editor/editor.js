import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

let CodeMirror;
if (typeof document !== 'undefined') {
  CodeMirror = require('codemirror');
}

class Editor extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    codeText: PropTypes.string,
    lineNumbers: PropTypes.bool,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    tabSize: PropTypes.number,
    theme: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    lineNumbers: false,
    readOnly: false,
    tabSize: 2,
    theme: 'oceanic-next',
  };

  constructor(props) {
    super(props);

    this.debouncedOnChange = _.debounce(props.onChange, 500);
  }

  componentDidMount() {
    if (!CodeMirror) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'javascript',
      lineNumbers: this.props.lineNumbers,
      smartIndent: false,
      tabSize: this.props.tabSize,
      matchBrackets: true,
      theme: this.props.theme,
      readOnly: this.props.readOnly,
    });

    this.editor.on('change', this.handleChange);
  }

  componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  }

  handleChange = () => {
    if (!this.props.readOnly && this.props.onChange) {
      this.debouncedOnChange(this.editor.getValue());
    }
  };

  render() {
    const { className, style } = this.props;

    return (
      <div className={className} style={style}>
        <textarea ref="editor" defaultValue={this.props.codeText} />
      </div>
    );
  }
}

export default Editor;
