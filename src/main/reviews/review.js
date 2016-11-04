export default {
  template: `
    <div class="content-image">
      <a :href="review.image">
        <img :src="review.image" :alt="review.imgAlt" :title="review.imgTitle" width="100%"/>
      </a>
    </div>
    <div class="content">
      <div style="text-align:center;margin-top:2em;">
        <h1>{{review.title}}</h1>
        <h3 style="margin:-0.5em 0 3em">{{review.credit}}</h3>
      </div>
      {{{review.text}}}
    </div>
  `,
  data() {
    return {
      review: this.$http.get(`data/reviews/${this.$route.params.title}.json`).then(rsp => this.review = rsp.data),
    };
  }
};