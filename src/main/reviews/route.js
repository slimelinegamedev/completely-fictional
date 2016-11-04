import list from './list';
import review from './review';

export default {
  name: 'reviews',
  component: {
    template: `<router-view></router-view>`,
  },
  children: {
    '/': {
      component: list,
    },
    '/:title': {
      component: review,
    },
  },
};