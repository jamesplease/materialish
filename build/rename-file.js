'use strict';

const fs = require('fs');
const chalk = require('chalk');

module.exports = function (oldFileName, newFileName, onStartMsg, onEndMsg) {
  const startMsg = onStartMsg || `Renaming ${oldFileName} to ${newFileName}`;
  const endMsg = onEndMsg || '✔ The file was successfully renamed!';
  console.log(chalk.blue(startMsg));

  fs.renameSync(oldFileName, newFileName);

  console.log(chalk.green(endMsg));
};
