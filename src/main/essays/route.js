import essay from './essay';
import list from './list';

export default {
  name: 'essays',
  component: {
    template: `<router-view></router-view>`,
  },
  children: {
    '/': {
      component: list,
    },
    '/:title': {
      component: essay,
    },
  },
};