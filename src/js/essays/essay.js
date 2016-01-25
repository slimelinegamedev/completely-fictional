const essay = Vue.extend({
  props: [ 'essay' ],
  template: `
    <div class="content-image">
      <img :src="essay.image" width="100%"/>
    </div>
    <div class="content">
      <div style="text-align:center;margin:2em 0 3em;">
        <h2>{{essay.title}}</h2>
      </div>
      {{{essay.text}}}
    </div>
  `,
  data() {
    return {
      essay: this.$http.get(`data/essays/${this.$route.params.title}.json`).then(rsp => this.essay = rsp.data),
    };
  }
});