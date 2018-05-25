import React from 'react';
import components from './components';

const fs = require('fs');

const homeMarkdown = fs.readFileSync('./src/home/index.md', {
  encoding: 'utf-8',
});

const readmes = {
  avatar: fs.readFileSync('./readmes/avatar.md', { encoding: 'utf-8' }),
  button: fs.readFileSync('./readmes/button.md', { encoding: 'utf-8' }),
  checkbox: fs.readFileSync('./readmes/checkbox.md', { encoding: 'utf-8' }),
  switch: fs.readFileSync('./readmes/switch.md', { encoding: 'utf-8' }),
  icons: fs.readFileSync('./readmes/icons.md', { encoding: 'utf-8' }),
};

const examples = {
  avatar: fs.readFileSync('./examples/avatar.js', { encoding: 'utf-8' }),
  button: fs.readFileSync('./examples/button.js', { encoding: 'utf-8' }),
  checkbox: fs.readFileSync('./examples/checkbox.js', { encoding: 'utf-8' }),
  switch: fs.readFileSync('./examples/switch.js', { encoding: 'utf-8' }),
  icons: fs.readFileSync('./examples/icons.js', { encoding: 'utf-8' }),
};

// import { addSearchObjects } from './algolia'

export default {
  siteRoot: 'https://jamesplease.github.io',
  basePath: 'materialish',
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
      },
      {
        path: '/components',
        component: 'src/components/index',
        getData: async () => ({
          components,
        }),
        children: components.map(component => ({
          path: component.url,
          component: component.component,
          getData: async () => ({
            component,
            markdown: readmes[component.componentKey],
            example: examples[component.componentKey],
          }),
        })),
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
