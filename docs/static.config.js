import React from 'react';
import components from './components';

// import { addSearchObjects } from './algolia'

export default {
  siteRoot: 'https://jamesplease.github.io',
  basePath: 'materialish',
  getSiteData: () => ({
    title: 'Materialish',
    components
  }),
  getRoutes: async () => {
    // This is how I would add data to Algolia. It probably
    // needs to have the actual content of the files in here.
    // addSearchObjects('components', components);

    return [
      {
        path: '/',
        component: 'src/components/home',
      },
      // {
      //   path: '/components',
      //   component: 'src/components/components',
      //   getData: async () => ({
      //     components
      //   }),
      //   children: components.map(component => ({
      //     path: component.url,
      //     component: component.component,
      //     getData: async () => ({
      //       component
      //     }),
      //   }))
      // },
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
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
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
