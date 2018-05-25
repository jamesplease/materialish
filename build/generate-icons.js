const fs = require('fs');
const path = require('path');
const clone = require('git-clone');
const find = require('find');
const chalk = require('chalk');

const MATERIAL_ICONS_REPO_PATH = path.join(
  __dirname,
  '..',
  'material-icons-repo'
);
const OUTPUT_DIRECTORY = path.join(__dirname, '..', 'icons');
const OUTPUT_INDEX_FILEPATH = path.join(OUTPUT_DIRECTORY, 'index.js');

const template = `import React, { Component } from "react";

export default class [[classname]] extends Component {
  render() {
    const { size = "1em", ...props } = this.props;

    return (
      [[svg]]
    );
  }
}
`;

const namedExports = {};

console.log(chalk.blue('Generating the Materialish Icons components...'));
console.log(
  chalk.blue(
    '  Cloning https://github.com/google/material-design-icons.git into ./material-icons-repo'
  )
);

let fileCount = 0;
clone(
  'https://github.com/google/material-design-icons.git',
  MATERIAL_ICONS_REPO_PATH,
  {},
  () => {
    console.log(
      chalk.blue(
        '  ✔ The repository was successfully cloned to ./material-icons-repo'
      )
    );

    console.log(
      chalk.blue('  Generating the component files from the source SVGs...')
    );

    find
      .eachfile(/_48px.svg$/, MATERIAL_ICONS_REPO_PATH, function(file) {
        if (file.indexOf('design') !== -1) {
          return;
        }

        fileCount++;

        const contents = fs.readFileSync(file, 'utf8');

        const fileName =
          'icon-' +
          file
            .replace('ic_', '')
            .replace('_48px.svg', '')
            .split('/')
            .pop()
            .split('_')
            .join('-')
            .toLowerCase();

        const classname = fileName
          .split('-')
          .map((val, idx) => {
            return val.charAt(0).toUpperCase() + val.slice(1);
          })
          .join('');

        namedExports[classname] = fileName;

        const svg = contents
          .replace('>', ' {...props} > ')
          .replace(/width="48"/, 'width={size}')
          .replace(/height="48"/, 'height={size}');

        const outputFilePath = path.join(OUTPUT_DIRECTORY, `${fileName}.js`);

        fs.writeFileSync(
          outputFilePath,
          template.replace('[[svg]]', svg).replace('[[classname]]', classname)
        );
      })
      .end(() => {
        console.log(
          chalk.blue(
            `  ✔ Successfully created ${fileCount} SVG component files. They can be found in ./icons`
          )
        );
        console.log(chalk.blue('Creating index.js...'));

        let fileContent = '';
        Object.keys(namedExports).forEach(classname => {
          fileContent += `export { ${classname} } from './${
            namedExports[classname]
          }'\n`;
        });

        fs.writeFileSync(OUTPUT_INDEX_FILEPATH, fileContent);
        console.log(chalk.blue(`  ✔ The index.js file was saved!`));
        console.log(chalk.green(`✔ Creating the Icon files was successful.`));
      });
  }
);
