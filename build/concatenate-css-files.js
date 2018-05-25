'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const cleanCss = require('clean-css');

const COMPONENT_DIR = path.join(__dirname, '..', 'src');
const DESTINATION_DIRECTORY = path.join(__dirname, '..');
const DESTINATION_FILE = path.join(DESTINATION_DIRECTORY, 'materialish.css');
const MINIFIED_DESTINATION_FILE = path.join(
  DESTINATION_DIRECTORY,
  'materialish.min.css'
);

const cssFilesToCopy = `${COMPONENT_DIR}/*/*.css`;

console.log(chalk.blue('Creating materialish.css...'));

glob(cssFilesToCopy, function(err, files) {
  if (err) {
    console.log(chalk.red('There was an error when reading the source files.'));
    process.exit(1);
  }

  const fileText = files
    .map(file => fs.readFileSync(file, { encoding: 'utf-8' }))
    .join('\n');

  fs.writeFileSync(DESTINATION_FILE, fileText, { encoding: 'utf-8' });

  console.log(
    chalk.green('✔ The file materialish.css was successfully created!')
  );

  console.log(chalk.blue('Minifying the CSS to create materialish.min.css...'));
  const minifiedFile = new cleanCss({}).minify(fileText);

  fs.writeFileSync(MINIFIED_DESTINATION_FILE, minifiedFile.styles, {
    encoding: 'utf-8',
  });

  console.log(
    chalk.green(
      '✔ The minified file materialish.min.css was successfully created!'
    )
  );
});
