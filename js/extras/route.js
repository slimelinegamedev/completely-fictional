const Extras = {
  name: 'extras',
  component: Vue.extend({
    template: `<router-view></router-view>`,
    subRoutes: {
      '/': {
        component: extrasLanding
      },
      '/:subroute': {
        component: extrasSubroute
      }
    }
  }),
};