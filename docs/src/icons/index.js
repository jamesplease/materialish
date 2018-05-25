import React, { Component, Fragment } from 'react';
import * as Materialish from 'materialish';
import * as MaterialishIcons from 'materialish-icons';
import { withRouteData } from 'react-static';
import {
  Markdown,
  CodeManager,
  Editor,
  Preview,
} from '../vendor/doc-components';
import PropTypes from 'prop-types';

const demoScope = {
  React,
  Component,
  Fragment,
  PropTypes,
  ...Materialish,
  ...MaterialishIcons,
};

export class Icons extends Component {
  render() {
    const { markdown, example } = this.props;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">Icons</h1>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a
              href="https://material.io/tools/icons/?style=baseline"
              className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text" /> Material
              Docs
            </a>
          </li>
        </ul>
        <p className="paragraph">
          Materialish provides an individual React Component for each Material
          Design icon. The icons are distributed in a separate npm package,
          materialish-icons.
        </p>
        <CodeManager code={example}>
          {({ code, handleCodeChange }) => (
            <Fragment>
              {code && (
                <Preview
                  className="componentDoc_preview"
                  code={code}
                  scope={demoScope}
                />
              )}
              <div className="componentDoc_note">
                <span className="componentDoc_noteEmoji">🙌</span> Heads up!
                This code is editable. The preview above will update to reflect
                your changes.
              </div>
              <Editor
                className="componentDoc_editor"
                theme="oceanic-next"
                codeText={code}
                onChange={handleCodeChange}
              />
            </Fragment>
          )}
        </CodeManager>
        <Markdown markdownText={markdown} />
      </div>
    );
  }
}

export default withRouteData(Icons);
