'use strict';

const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const copyFiles = require('./copy-files');

const COMPONENT_DIR = path.join(__dirname, '..', 'src');
const DESTINATION_DIRECTORY = path.join(__dirname, '..');

const cssFilesToCopy = `${COMPONENT_DIR}/*/*.css`;

glob(cssFilesToCopy, function(err, files) {
  if (err) {
    console.log(chalk.red('There was an error when reading the source files.'));
    process.exit(1);
  }

  copyFiles(files, DESTINATION_DIRECTORY);
});
