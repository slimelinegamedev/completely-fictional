const Poem = Vue.extend({
  params: ['showNext', 'showPrev'],
  template: `
    <div>
      <p>{{$route.params.series}} {{$route.params.id}}</p>
      <br/>
      <p class="nav" >
        <span v-if="showNext" @click="next($route.params.series, $route.params.id)">next &raquo;</span></p>
        <span v-if="showPrev" @click="prev($route.params.series, $route.params.id)">previous &laquo;</span></p>
    </div>
  `,
  data() {
    return {
      series: this.$route.params.series,
      id: this.$route.params.id,
      showNext: true,
      showPrev: false,
    }
  },
  methods: {
    next(series, id) {
      const intId = parseInt(id);
      switch (this.series) {
        case 'love':
          if (intId < 6) this.showNext = true;
          else this.showNext = false;
          break;
        case 'i-am':
          if (intId < 5) this.showNext = true;
          else this.showNext = false;
          break;
        case 'plagiarised':
          if (intId < 13) this.showNext = true;
          else this.showNext = false;
          break;
      }
      router.go(`/poetry/${series}/${intId + 1}`);
    }
  }
});