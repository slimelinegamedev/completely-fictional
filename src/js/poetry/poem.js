const Poem = Vue.extend({
  params: ['poem', 'next', 'showNext', 'prev', 'showPrev'],
  template: `
    <div>
      <p>{{{poem}}}</p>
      <br/>
      <p class="nav">
        <span v-if="showPrev" @click="prev($route.params.series, $route.params.id)">&laquo; previous</span>
        <span v-if="showNext" @click="next($route.params.series, $route.params.id)">next &raquo;</span>
      </p>
    </div>
  `,
  route: {
    activate() {
      this.$parent.random = `images/lights/lights-${this.$parent.randomizer()}.png`
      const id = parseInt(this.$route.params.id);
      switch (this.$route.params.series) {
        case 'love':
          if (id < 7) this.showNext = true;
          break;
        case 'i-am':
          if (id < 6) this.showNext = true;
          break;
        case 'plagiarised':
          if (id < 14) this.showNext = true;
          break;
      }
      if (id == 1) this.showPrev = false;
      this.$http
        .get(`data/poetry/${this.$route.params.series}/${this.$route.params.id}.json`)
        .then(rsp => this.$set('poem', rsp.data));
    },
    canReuse: false,
  },
  data() {
    return {
      poem: "",
      showNext: false,
      showPrev: true,
    }
  },
  methods: {
    next(series, id) {
      router.go(`/poetry/${series}/${parseInt(id) + 1}`);
    },
    prev(series, id) {
      router.go(`/poetry/${series}/${parseInt(id) - 1}`);
    }
  }
});