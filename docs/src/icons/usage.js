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

const demoScope = {
  React,
  Component,
  Fragment,
  PropTypes,
  ...Materialish,
  ...MaterialishIcons,
};

export class Usage extends Component {
  render() {
    const { markdown, example } = this.props;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Using Icons
        </h1>
        <p className="paragraph">
          Each icon provided by Materialish is an individual React Component.
          Because the components render SVG, you do not need to import CSS file
          to use the icons.
        </p>
        <CodeManager initialCode={example} scope={demoScope}>
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

export default withRouteData(Usage);
