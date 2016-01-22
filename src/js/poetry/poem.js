const Poem = Vue.extend({
  params: ['poem', 'next', 'showNext', 'prev', 'showPrev'],
  template: `
    <div>
      <p>{{{poem}}}</p>
      <br/>
      <p class="nav">
        <button :disabled="showPrev" @click="prev($route.params.series, $route.params.id)">&laquo; previous</button>
        <button :disabled="showNext" @click="next($route.params.series, $route.params.id)">next &raquo;</button>
      </p>
    </div>
  `,
  route: {
    activate() {
      this.$parent.random = `images/lights/lights-${this.$parent.randomizer()}.png`
      const id = parseInt(this.$route.params.id);
      switch (this.$route.params.series) {
        case 'love':
          if (id < 7) this.showNext = false;
          break;
        case 'i-am':
          if (id < 6) this.showNext = false;
          break;
        case 'plagiarised':
          if (id < 14) this.showNext = false;
          break;
      }
      if (id == 1) this.showPrev = true;
      this.$http
        .get(`data/poetry/${this.$route.params.series}/${this.$route.params.id}.json`)
        .then(rsp => this.$set('poem', rsp.data));
    },
    canReuse: false,
  },
  data() {
    return {
      poem: "",
      showNext: true,
      showPrev: false,
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