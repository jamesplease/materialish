import React, { Component } from "react";
import {Button, Ripple} from 'materialish';
import Markdown from "../vendor/doc-components/markdown";
import Demo from "../vendor/doc-components/demo";
import buttonReadmeUrl from "./README.md";

export default class ButtonExample extends Component {
  render() {
    return (
      <div className="button">
        <Markdown markdownUrl={buttonReadmeUrl} />
        <Demo scope={{ React, Button, Ripple }}/>
      </div>
    );
  }
}
