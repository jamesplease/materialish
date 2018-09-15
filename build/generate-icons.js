const fs = require('fs');
const path = require('path');
const clone = require('git-clone');
const mkdirp = require('mkdirp');
const find = require('find');
const _ = require('lodash');
const chalk = require('chalk');
const svgAttributeList = require('./svg-attribute-list');

const ICONS_REPO_DIR = 'material-icons-repo';

const MATERIAL_ICONS_REPO_PATH = path.join(__dirname, '..', ICONS_REPO_DIR);
const PROJECT_DIRECTORY = path.join(__dirname, '..');
const OUTPUT_DIRECTORY = path.join(PROJECT_DIRECTORY, 'src', 'icons');
const OUTPUT_INDEX_DIRECTORY = path.join(PROJECT_DIRECTORY, 'icons-index-src');
const OUTPUT_INDEX_FILEPATH = path.join(OUTPUT_INDEX_DIRECTORY, 'index.js');
const OUTPUT_METADATA_FILEPATH = path.join(
  PROJECT_DIRECTORY,
  'icons-data.json'
);

const template = `import React from "react";

export default function [[classname]](props) {
  const { size, style, ...rest } = props;

  const baseStyles = {};

  if (size) {
    baseStyles['--_mt-iconSize'] = size;
  }

  const styleToApply = {
    ...baseStyles,
    width: 'var(--_mt-iconSize, 1em)',
    height: 'var(--_mt-iconSize, 1em)',
    ...style
  };

  return (
    [[svg]]
  );
}
`;

const namedExports = {};

console.log(chalk.blue('Generating the Materialish Icons components...'));
console.log(
  chalk.blue(
    '  Cloning https://github.com/google/material-design-icons.git into ./material-icons-repo'
  )
);

const iconData = {
  icons: [],
  categories: {},
};

let fileCount = 0;
clone(
  'https://github.com/google/material-design-icons.git',
  MATERIAL_ICONS_REPO_PATH,
  {
    // This ensures a stable release of Material Design Icons
    // https://github.com/google/material-design-icons/releases/tag/3.0.1
    // Version release date: Sept. 2016
    // As of Aug 2018, this is the latest release.
    checkout: 'a6145e167b4a3a65640dd6279319cbc77a7e4e96',
  },
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

        const contents = fs.readFileSync(file, 'utf8');

        const iconName = file
          .replace('ic_', '')
          .replace('_48px.svg', '')
          .split('/')
          .pop()
          .toLowerCase();

        const fileName =
          'icon-' +
          iconName
            .split('_')
            .join('-')
            .toLowerCase();

        const classname = fileName
          .split('-')
          .map(val => {
            return val.charAt(0).toUpperCase() + val.slice(1);
          })
          .join('');

        namedExports[classname] = fileName;

        const splitFile = file.split('/');
        const repoNameIndex = splitFile.indexOf(ICONS_REPO_DIR);
        const categoryName = splitFile[repoNameIndex + 1];

        if (!iconData.categories[categoryName]) {
          iconData.categories[categoryName] = [];
        }

        const iconInformation = {
          iconName,
          fileName,
          iconClass: classname,
        };

        iconData.categories[categoryName].push(iconInformation);

        // This ensures that we don't add duplicates
        if (_.find(iconData.icons, { iconName })) {
          return;
        }

        fileCount++;
        iconData.icons.push(iconInformation);

        let svg = contents
          .replace('>', ' aria-hidden="true" focusable="false" {...rest} > ')
          .replace(/width="48"/, '')
          .replace(/height="48"/, 'style={styleToApply}');

        // This ensures that SVG attribute names with hyphens are prop'd
        _.forEach(svgAttributeList, attrName => {
          svg = svg.replace(attrName, _.camelCase(attrName));
        });

        mkdirp.sync(OUTPUT_DIRECTORY);
        const outputFilePath = path.join(OUTPUT_DIRECTORY, `${fileName}.js`);

        fs.writeFileSync(
          outputFilePath,
          template.replace('[[svg]]', svg).replace('[[classname]]', classname)
        );
      })
      .end(() => {
        iconData.count = fileCount;

        console.log(
          chalk.blue(
            `  ✔ Successfully created ${fileCount} SVG component files. They can be found in ./src`
          )
        );
        console.log(chalk.blue('Creating index.js...'));

        let fileContent = '';
        Object.keys(namedExports).forEach(classname => {
          fileContent += `export { default as ${classname} } from '../${
            namedExports[classname]
          }'\n`;
        });

        mkdirp.sync(OUTPUT_INDEX_DIRECTORY);
        fs.writeFileSync(OUTPUT_INDEX_FILEPATH, fileContent);
        fs.writeFileSync(OUTPUT_METADATA_FILEPATH, JSON.stringify(iconData));

        console.log(chalk.blue(`  ✔ The index.js file was saved!`));
        console.log(chalk.green(`✔ Creating the Icon files was successful.`));
      });
  }
);
