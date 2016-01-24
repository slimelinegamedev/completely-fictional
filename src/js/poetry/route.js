const Poetry = {
  component: Vue.extend({
    props: [ 'random' ],
    template: `
      <div class="content-image">
        <img :src="random" width="100%"/>
      </div>
      <div class="content-header">
        <h3 align="center">
          poetry collection, 2013: <a v-link="'/poetry/not-quite-a-colossus'">not quite a colossus, not yet a champion</a>
        </h3>
      </div>
      <div class="content" v-if="this.$route.path !== '/poetry'">
        <router-view></router-view>
      </div>
      <div class="content">
        <div class="nav">
          <p>Love: <span class="poetry-nav" v-for="id in 7" @click="go('love', id + 1)">{{id + 1}}</span></p>
          <p>I Am: <span class="poetry-nav" v-for="id in 6" @click="go('i-am', id + 1)">{{id + 1}}</span></p>
          <p>Plagiarised: <span class="poetry-nav" v-for="id in 14" @click="go('plagiarised', id + 1)">{{id + 1}}</span></p>
        </div>
      </div>
    `,
    data() {
      return {
        random: `images/lights/lights-${this.randomizer()}.png`
      };
    },
    methods: {
      go(series, id) {
        this.random = `images/lights/lights-${this.randomizer()}.png`;
        router.go(`/poetry/${series}/${id}`);
      },
      randomizer() {
        const pick = Math.random();
        return pick < 0.25 ? 1 :
          pick < 0.5 ? 2 :
            pick < 0.75 ? 3 : 4;
      }
    }
  }),
  subRoutes: {
    '/:series/:id': {
      component: Poem,
    },
    '/not-quite-a-colossus': {
      component: Colossus,
    },
    '/not-quite-a-colossus/not-yet-a-champion': {
      component: Champion
    }
  },
};