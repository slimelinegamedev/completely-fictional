import list from 'app:reviews/list';
import review from 'app:reviews/review';

export default {
  name: 'reviews',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: Vue.extend(list),
    },
    '/:title': {
      component: Vue.extend(review),
    },
  },
};