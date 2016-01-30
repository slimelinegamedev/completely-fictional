import landing from 'app:extras/landing';

export default {
  name: 'extras',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
    subRoutes: {
      '/': {
        component: Vue.extend(landing)
      },
      '/:subroute': {
        component: Vue.extend({})
      }
    },
};