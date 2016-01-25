const Trackback = {
  name: 'trackback',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: synopsis,
    },
    '/:chapter': {
      component: chapter,
    },
  },
};