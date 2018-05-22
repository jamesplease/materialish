import React, { Component, Fragment } from 'react';
import * as Materialish from 'materialish';
import PropTypes from 'prop-types';
import {withRouteData} from 'react-static';
import * as readmes from '../readmes';
import * as examples from '../examples';
import './component-doc.css';

let Markdown, CodeManager, Editor, Preview;
if (typeof navigator !== 'undefined') {
  const docComponent = require('doc-components');
  Markdown = docComponent.Markdown;
  CodeManager = docComponent.CodeManager;
  Editor = docComponent.Editor;
  Preview = docComponent.Preview;
}

const demoScope = {
  React,
  Component,
  Fragment,
  PropTypes,
  ...Materialish
};

const rootSourceUrl = 'https://github.com/jamesplease/materialish/tree/master/src/';

export class ComponentDoc extends Component {
  render() {
    const {
      sourceLink,
      component
    } = this.props;

    const {materialDocsLink, description, name, componentKey} = component;

    const readmeUrl = readmes[componentKey];
    const exampleUrl = examples[componentKey];

    const sourceLinkToUse = sourceLink ? sourceLink : `${rootSourceUrl}${componentKey}`;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          {name}
        </h1>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a href={sourceLinkToUse} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-code"></i>
              {' '}
              View Source
            </a>
          </li>
          {materialDocsLink && (
            <li className="componentDoc_linkItem">
              <a href={materialDocsLink} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text"></i>
              {' '}
                Material Docs
              </a>
            </li>
          )}
        </ul>
        <p className="paragraph">
          {description}
        </p>
        <CodeManager codeTextUrl={exampleUrl}>
          {({ code, handleCodeChange }) => (
            <Fragment>
              <div className="componentDoc_note">
                Heads up! This code is editable. The preview below will
                reflect your changes.
              </div>
              <Editor
                className="componentDoc_editor"
                theme='oceanic-next'
                codeText={code}
                onChange={handleCodeChange}
              />
              {code && (
                <Preview code={code} scope={demoScope} />
              )}
            </Fragment>
          )}
        </CodeManager>
       {readmeUrl && (<Markdown markdownUrl={readmeUrl} />)}
      </div>
    );
  }

  state = {
    readmeUrl: null
  };
}

export default withRouteData(ComponentDoc);