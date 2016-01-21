const Essay = Vue.extend({
  props: ['essay'],
  template: `
    <div class="content-image">
      <img :src="essay.image" width="100%"/>
    </div>
    <div class="content">
      <h2>{{essay.title}}</h2>
      {{{essay.text}}}
    </div>
  `,
  data() {
    return {
      essay: this.$http.get(`data/essays/${this.$route.params.title}.json`).then(rsp => this.essay = rsp.data)
    }
  }
});
