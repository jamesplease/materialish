import React from "react";
import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";
import "./editor.css";
import "./editor-theme.css";

class Editor extends React.Component {
  // static propTypes = {
  //   className: React.PropTypes.string,
  //   codeText: React.PropTypes.string,
  //   lineNumbers: React.PropTypes.bool,
  //   onChange: React.PropTypes.func,
  //   readOnly: React.PropTypes.bool,
  //   tabSize: React.PropTypes.number,
  //   theme: React.PropTypes.string
  // };

  static defaultProps = {
    className: "",
    lineNumbers: false,
    readOnly: false,
    tabSize: 2,
    theme: "one-dark"
  };

  componentDidMount() {
    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      mode: "javascript",
      lineNumbers: this.props.lineNumbers,
      smartIndent: false,
      tabSize: this.props.tabSize,
      matchBrackets: true,
      theme: this.props.theme,
      readOnly: this.props.readOnly
    });

    this.editor.on("change", this.handleChange);
  }

  componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  }

  handleChange = () => {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  };

  setCode(code) {
    this.editor.getDoc().setValue(code);
    this.handleChange();
  }

  render() {
    return (
      <div>
        <textarea ref="editor" defaultValue={this.props.codeText} />
      </div>
    );
  }
}

export default Editor;
