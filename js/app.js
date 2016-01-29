import 'vue';
import 'vue-router';
import 'vue-resource';

import footer from 'app:components/footer';
import header from 'app:components/header';
import nav from 'app:components/nav';

import map from 'app:router/map';
import redirect from 'app:router/redirect';
import options from 'app:router/options';

import Essays from 'app:essays/route';
import Poetry from 'app:poetry/route';
import Reviews from 'app:reviews/route';
import Trackback from 'app:trackback/route';
import LargeRoundEyes from 'app:lre/route';
import Extras from 'app:extras/route';

Vue.component('cf-footer', footer);
Vue.component('cf-header', header);
Vue.component('cf-navigation', nav);

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut',
});

const App = Vue.extend({});
const router = new VueRouter(options);

router.redirect(redirect);
router.map(map);

router.on('/essays', Essays);
router.on('/poetry', Poetry);
router.on('/reviews', Reviews);
router.on('/trackback', Trackback);
router.on('/large-round-eyes', LargeRoundEyes);
router.on('/extras', Extras);

router.start(App, '#app');