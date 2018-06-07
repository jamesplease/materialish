import React from 'react';
import _ from 'lodash';
import components from './components';

const fs = require('fs');

const fsOptions = { encoding: 'utf-8' };

const homeMarkdown = fs.readFileSync('./src/home/index.md', fsOptions);

const readmes = {
  avatar: fs.readFileSync('./readmes/avatar.md', fsOptions),
  button: fs.readFileSync('./readmes/button.md', fsOptions),
  checkbox: fs.readFileSync('./readmes/checkbox.md', fsOptions),
  switch: fs.readFileSync('./readmes/switch.md', fsOptions),
  icons: fs.readFileSync('./readmes/icons.md', fsOptions),
  spinner: fs.readFileSync('./readmes/spinner.md', fsOptions),
  radio: fs.readFileSync('./readmes/radio.md', fsOptions),
  dialog: fs.readFileSync('./readmes/dialog.md', fsOptions),
  card: fs.readFileSync('./readmes/card.md', fsOptions),
  'action-chip': fs.readFileSync('./readmes/action-chip.md', fsOptions),
  'filter-chip': fs.readFileSync('./readmes/filter-chip.md', fsOptions),
  'choice-chip': fs.readFileSync('./readmes/choice-chip.md', fsOptions),
};

const examples = {
  avatar: fs.readFileSync('./examples/avatar.js', fsOptions),
  button: fs.readFileSync('./examples/button.js', fsOptions),
  checkbox: fs.readFileSync('./examples/checkbox.js', fsOptions),
  switch: fs.readFileSync('./examples/switch.js', fsOptions),
  icons: fs.readFileSync('./examples/icons.js', fsOptions),
  spinner: fs.readFileSync('./examples/spinner.js', fsOptions),
  radio: fs.readFileSync('./examples/radio.js', fsOptions),
  dialog: fs.readFileSync('./examples/dialog.js', fsOptions),
  card: fs.readFileSync('./examples/card.js', fsOptions),
  'action-chip': fs.readFileSync('./examples/action-chip.js', fsOptions),
  'filter-chip': fs.readFileSync('./examples/filter-chip.js', fsOptions),
  'choice-chip': fs.readFileSync('./examples/choice-chip.js', fsOptions),
};

// import { addSearchObjects } from './algolia'

export default {
  siteRoot: 'https://materialish.js.org',
  getSiteData: () => ({
    title: 'Materialish',
    components,
  }),
  getRoutes: async () => {
    // This is how I would add data to Algolia. It probably
    // needs to have the actual content of the files in here.
    // addSearchObjects('components', components);

    return [
      {
        path: '/',
        component: 'src/home/index',
        getData: async () => ({
          homeMarkdown,
        }),
      },
      {
        path: '/icons',
        component: 'src/icons',
        getData: async () => ({
          markdown: readmes.icons,
          example: examples.icons,
        }),
        children: [
          {
            path: '/catalog',
            component: 'src/icons/catalog',
          },
          {
            path: '/usage',
            component: 'src/icons/usage',
            getData: async () => ({
              markdown: readmes.icons,
              example: examples.icons,
            }),
          },
        ],
      },
      {
        path: '/components',
        component: 'src/components/index',
        getData: async () => ({
          components,
        }),
        children: _.flatMap(components, component => {
          const main = {
            path: component.url,
            component: component.component,
            getData: async () => ({
              component,
              markdown: readmes[component.componentKey],
              example: examples[component.componentKey],
            }),
          };

          const children = _.map(component.children, child => {
            return {
              path: child.url,
              component: child.component,
              getData: async () => ({
                component: child,
                markdown: readmes[child.componentKey],
                example: examples[child.componentKey],
              }),
            };
          });

          return [main, ...children];
        }),
      },
      {
        is404: true,
        component: 'src/common/404',
      },
    ];
  },

  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        />
        <title>{siteData.title}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Body>
        <div id="root">{children}</div>
      </Body>
    </Html>
  ),
};
