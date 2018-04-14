'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const copyFiles = require('./copy-files');

const NODE_MODULES = path.join(__dirname, '..', 'docs', 'node_modules');
const DESTINATION_DIRECTORY = path.join(__dirname, '..', 'docs', 'src', 'styles', 'npm-package-styles');

const filesToCopy = [
  'highlight.js/styles/github-gist.css',
  'codemirror/theme/oceanic-next.css'
];

console.log(chalk.blue('\nCopying stylesheets from node_modules into the docs src folder.'));

fs.access(NODE_MODULES, (err) => {
  if (err && err.code === 'ENOENT') {
    console.error(chalk.red('Please install the node modules within the /docs directory by running `npm install`'));
    process.exit(1);
  }

  copyFiles(filesToCopy.map(file => path.join(NODE_MODULES, file)), DESTINATION_DIRECTORY);
});