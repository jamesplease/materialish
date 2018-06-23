'use strict';

const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const copyFiles = require('./copy-files');

const TRANSPILED_ICONS_DIR = path.join(__dirname, '..', 'transpiled-icons');
const DESTINATION_DIRECTORY = path.join(__dirname, '..');

const iconFilesToCopy = `${TRANSPILED_ICONS_DIR}/src/icons/*.js`;

glob(iconFilesToCopy, function(err, files) {
  if (err) {
    console.log(chalk.red('There was an error when reading the source files.'));
    process.exit(1);
  }

  copyFiles(files, DESTINATION_DIRECTORY);
});
