const essays = {
  name: 'essays',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: EssayList,
    },
    '/:title': {
      component: Essay,
    },
  },
};