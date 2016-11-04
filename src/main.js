import 'vue';
import 'vue-router';
import 'vue-resource';

import footer from './components/footer';
import header from './components/header';
import nav from './components/nav';

import essays from './main/essays/route';
import poetry from './main/poetry/route';
import reviews from './main/reviews/route';
import trackback from './main/trackback/route';
import large_round_eyes from './main/lre/route';
import extras from './main/extras/route';

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut',
});

const routes = [ essays, poetry, reviews, trackback, large_round_eyes, extras ];
routes.forEach(route => {
	route.path = '/' + route.name;
	if (route.children) {
		route.component = { template: `<router-view></router-view>` };
	}
});

const router = new VueRouter({
  base: '/',
	routes,
});

const app = new Vue({ router }).$mount('#app');

Vue.component('cf-footer', footer);
Vue.component('cf-header', header);
Vue.component('cf-navigation', nav);