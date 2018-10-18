import React, { Component, Fragment } from 'react';
import * as Materialish from 'materialish';
import * as MaterialishIcons from 'materialish/icons';
import { withRouteData } from 'react-static';
import {
  Markdown,
  CodeManager,
  Editor,
  Preview,
} from '../vendor/doc-components';
import PropTypes from 'prop-types';
import './component-doc.css';

const demoScope = {
  React,
  Component,
  Fragment,
  PropTypes,
  ...Materialish,
  ...MaterialishIcons,
};

const rootSourceUrl =
  'https://github.com/jamesplease/materialish/tree/master/src/';

export class ComponentDoc extends Component {
  render() {
    const { component, markdown, example } = this.props;

    const {
      name,
      description,
      componentKey,
      sourceLink,
      materialDocsLink,
      wrapperStyle = {},
      editorHeight = '300px',
    } = component;

    const sourceLinkToUse = sourceLink
      ? sourceLink
      : `${rootSourceUrl}${componentKey}`;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">{name}</h1>
        <p className="paragraph">{description}</p>
        <CodeManager initialCode={example} scope={demoScope}>
          {({ inputCode, compiledCode, err, handleCodeChange }) => {
            return (
              <Fragment>
                {inputCode && (
                  <Preview
                    wrapperStyle={wrapperStyle}
                    className="componentDoc_preview"
                    code={inputCode}
                    compiledCode={compiledCode}
                    err={err}
                  />
                )}
                <div className="componentDoc_note">
                  <div className="componentDoc_noteContent">
                    <span className="componentDoc_noteEmoji">🙌</span> Heads up!
                    This code is editable. The preview above will update to
                    reflect your changes.
                  </div>
                </div>
                <Editor
                  style={{
                    '--editorHeight': editorHeight,
                  }}
                  className="componentDoc_editor"
                  theme="oceanic-next"
                  codeText={inputCode}
                  onChange={handleCodeChange}
                />
                {err && (
                  <pre className="componentDoc_errorMsg">{err.toString()}</pre>
                )}
              </Fragment>
            );
          }}
        </CodeManager>
        <Markdown markdownText={markdown} />
        <h2 className="secondaryHeader">Useful Links</h2>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a href={sourceLinkToUse} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-code" />Source Code
            </a>
          </li>
          {materialDocsLink && (
            <li className="componentDoc_linkItem">
              <a href={materialDocsLink} className="componentDoc_linkAnchor">
                <i className="componentDoc_icon zmdi zmdi-file-text" />Material
                Guidelines
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default withRouteData(ComponentDoc);
