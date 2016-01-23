const Poem = Vue.extend({
  params: [ 'poem', 'showPoem', 'next', 'showNext', 'prev', 'showPrev' ],
  template: `
      <div style="position:relative;">
        <div style="float:left;width:4%;margin:10em 4.5em 0 -2em;">
          <p class="nav">
            <button :disabled="showPrev" @click="prev($route.params.series, $route.params.id)">
              &laquo;
            </button>
          </p>
        </div>
        <div style="float:left;min-height:400px;max-height:1000px;width:70%">
          <p style="padding 2em 0 0 2em;" v-show="showPoem" class="animated-poem" transition="fade">{{{poem}}}</p>
        </div>
        <div style="float:left;width:4%;margin:10em 0 0 5em;">
          <p class="nav">
            <button :disabled="showNext" @click="next($route.params.series, $route.params.id)">
              &raquo;
            </button>
          </p>
        </div>
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
        .then(rsp => {
          this.$set('poem', rsp.data);
          this.showPoem = true;
        });
    },
    canDeactivate(transition) {
      this.showPoem = false;
      setTimeout(transition.next, 800);
    },
    canReuse: false,
  },
  data() {
    return {
      showPoem: false,
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
    },
  }
});

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut',
});