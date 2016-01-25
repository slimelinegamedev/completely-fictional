const Reviews = {
  name: 'reviews',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: reviewList,
    },
    '/:title': {
      component: review,
    },
  },
};