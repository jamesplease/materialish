'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

module.exports = function(files, destination) {
  console.log(
    chalk.blue(
      `Copying ${files.length} files to the website source directory...`
    )
  );

  // We need to ensure that the destination directory exists. Otherwise, the
  // copying of the files will fail.
  try {
    fs.mkdirSync(destination);
  } catch (e) {
    // Intentionally blank.
  }

  files.forEach(filepath => {
    const basename = path.basename(filepath);
    const fullDestPath = path.join(destination, basename);

    fs.copyFileSync(filepath, fullDestPath);
  });

  console.log(
    chalk.green(
      '✔ The files from node_modules have been copied to the website source directory. You are ready to develop the site!'
    )
  );
};
