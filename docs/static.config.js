import React from 'react';
import components from './components';

const fs = require('fs');

const homeMarkdown = fs.readFileSync('./src/components/index.md', {encoding: 'utf-8'});

const readmes = {
  button: fs.readFileSync('./readmes/button.md', {encoding: 'utf-8'}),
  checkbox: fs.readFileSync('./readmes/checkbox.md', {encoding: 'utf-8'}),
  switch: fs.readFileSync('./readmes/switch.md', {encoding: 'utf-8'}),
};

const examples = {
  button: fs.readFileSync('./examples/button.txt', {encoding: 'utf-8'}),
  checkbox: fs.readFileSync('./examples/checkbox.txt', {encoding: 'utf-8'}),
  switch: fs.readFileSync('./examples/switch.txt', {encoding: 'utf-8'})
}

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
        component: 'src/components/home',
        getData: async () => ({
          homeMarkdown
        })
      },
      {
        path: '/components',
        component: 'src/components/components',
        getData: async () => ({
          components
        }),
        children: components.map(component => ({
          path: component.url,
          component: 'src/components/component-doc',
          getData: async () => ({
            component,
            markdown: readmes[component.componentKey],
            example: examples[component.componentKey]
          })
        }))
      },
      {
        is404: true,
        component: 'src/components/404',
      },
    ]
  },

  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"/>
        <title>{siteData.title}</title>
      </Head>
      <Body>
        <div id="root">
          {children}
        </div>
      </Body>
    </Html>
  )
}
