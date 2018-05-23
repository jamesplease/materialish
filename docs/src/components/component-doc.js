import React, { Component, Fragment } from 'react';
import * as Materialish from 'materialish';
import { withRouteData } from 'react-static';
import { Markdown, CodeManager, Editor, Preview } from '../vendor/doc-components';
import PropTypes from 'prop-types';
import './component-doc.css';

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
    const {component, markdown, example} = this.props;

    const {
      readmeUrl,
      exampleUrl,
      name,
      description,
      componentKey,
      sourceLink,
      materialDocsLink
    } = component;

    const sourceLinkToUse = sourceLink ? sourceLink : `${rootSourceUrl}${componentKey}`;

    return (
      <div className="componentDoc">
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
        <CodeManager code={example}>
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
        <Markdown markdownText={markdown} />
      </div>);
  }
}

export default withRouteData(ComponentDoc);