// There are two separate types of code that this documentation
// supports.
//
// 1. Code blocks within imported Markdown files
// 2. Code files that can be executed and modified with the
//   in-browser text editor
//
// For the first use case, a few libraries are used:
// 
// - React Markdown: this parses the Markdown files. Note that
//   this library is not configured in this file.
// - React Lowlight: this adds syntax highlighting support to
//   React Markdown
// - Highlight.js: This is the actual syntax highlighting used
//   by Lowlight
//
//
// And in the second use case, CodeMirror is used.
//
// This file configures all of these libraries

import Lowlight from "react-lowlight";
import js from "highlight.js/lib/languages/javascript";

// This themes the highlighted syntax within Markdown as a GitHub Gist.
import "./styles/npm-package-styles/github-gist.css";

// Oceanic Next is the theme that we use for CodeMirror
import './styles/npm-package-styles/oceanic-next.css';
// This allows us to use the JS mode of CodeMirror

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript').default
}

// This registers JavaScript as a language for Highlight.js.
Lowlight.registerLanguage("js", js);


