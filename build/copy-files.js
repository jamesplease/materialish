'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

module.exports = function(files, destination, onStartMsg, onEndMsg) {
  const startMsg = onStartMsg || `Copying ${files.length} files...`;
  const endMsg = onEndMsg || '✔ The files were successfully copied!';
  console.log(chalk.blue(startMsg));

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

  console.log(chalk.green(endMsg));
};
