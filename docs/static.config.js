import components from './components';

// import { addSearchObjects } from './algolia'

export default {
  getSiteData: () => ({
    title: 'Materialish',
  }),
  getRoutes: async () => {
    // This is how I would add data to Algolia. It probably
    // needs to have the actual content of the files in here.
    // addSearchObjects('components', components);

    return [
      {
        path: '/',
        component: 'src/components/Home',
      },
      {
        path: '/about',
        component: 'src/components/About',
      },
      {
        path: '/components',
        component: 'src/components/components',
        getData: () => ({
          components
        }),
        children: components.map(component => ({
          path: component.url,
          component: 'src/components/About',
          getData: () => ({
            component
          })
        }))
      },
      {
        path: '/search',
        component: 'src/components/Search',
      },
      {
        is404: true,
        component: 'src/components/404',
      },
    ]
  },
}
