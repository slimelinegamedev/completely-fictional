import essay from 'app:essays/essay';
import list from 'app:essays/list';

export default {
  name: 'essays',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: Vue.extend(list),
    },
    '/:title': {
      component: Vue.extend(essay),
    },
  },
};