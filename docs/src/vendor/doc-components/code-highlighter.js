import React, { Component } from "react";
import Lowlight from "react-lowlight";
import js from "highlight.js/lib/languages/javascript";

Lowlight.registerLanguage("js", js);

export default class CodeBlock extends Component {
  render() {
    const { language, value, inline } = this.props;
    return (
      <Lowlight language={language || "js"} value={value} inline={inline} />
    );
  }
}
