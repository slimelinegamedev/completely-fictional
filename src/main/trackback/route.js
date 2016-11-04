import synopsis from './synopsis';
import chapter from './chapter';

export default {
  name: 'trackback',
  children: {
    '/': {
      component: synopsis,
    },
    '/:chapter': {
      component: chapter,
    },
  },
};