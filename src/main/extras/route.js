import landing from './landing';

export default {
  name: 'extras',
  component: {
    template: `<router-view></router-view>`,
  },
	children: {
		'/': {
			component: landing
		},
		'/:subroute': {
			component: {}
		}
	},
};