'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

module.exports = function(files, destination) {
  console.log(chalk.blue(`Copying ${files.length} files...`));

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

  console.log(chalk.green('✔ All done!'));
};
