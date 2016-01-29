import synopsis from 'app:trackback/synopsis';
import chapter from 'app:trackback/chapter';

export default {
  name: 'trackback',
  component: Vue.extend({
    template: `<router-view></router-view>`,
  }),
  subRoutes: {
    '/': {
      component: Vue.extend(synopsis),
    },
    '/:chapter': {
      component: Vue.extend(chapter),
    },
  },
};