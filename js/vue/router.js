const App = Vue.extend({});
const router = new VueRouter({
  hashbang: false,
  root: '/',
});

router.redirect({
  '*': '/'
});

router.map({
  '/': {
    name: 'home',
    component: {
      template: `
        <div class="content-image">
          <a href="http://www.flickr.com/photos/sarako/2525878622/" class="image">
            <img src="images/cf-sidebar.jpg" alt="" width="100%"/>
          </a>
        </div>
        <div class="content">
          <h2>The personal space of writer Zack Schuster. Everything here is false.</h2>
          <p>(not really)</p>
        </div>
      `,
    },
  }
});

router.on('/essays', Essays);
router.on('/poetry', Poetry);
router.on('/reviews', Reviews);
router.on('/trackback', Trackback);
router.on('/large-round-eyes', LargeRoundEyes);
router.on('/extras', Extras);

router.start(App, '#app');