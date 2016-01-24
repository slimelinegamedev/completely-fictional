const Essays = {
  name: 'essays',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: essayList,
    },
    '/:title': {
      component: essay,
    },
  },
};