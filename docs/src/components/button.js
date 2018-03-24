import React, { Component } from "react";
import Markdown from "../vendor/doc-components/markdown";
import Demo from "../vendor/doc-components/demo";
import buttonReadmeUrl from "./README.md";

class Button extends Component {
  render() {
    return (
      <div className="button">
        <Markdown markdownUrl={buttonReadmeUrl} />
        <Demo />
      </div>
    );
  }
}

export default Button;
