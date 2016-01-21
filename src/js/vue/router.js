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

router.on('/essays', essays);
router.on('/poetry', poetry);

router.start(App, '#app');