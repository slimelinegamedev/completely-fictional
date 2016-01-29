export default {
  template: `
    <div class="content-image">
      <img src="images/reviews/cf-sidebar-reviews.jpg" width="100%"/>
    </div>
    <div class="content">
      <ul class="padding">
        <li v-for="review in reviewList">
          <a v-link='review.link'>
            {{review.title}}
          </a>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      reviewList: this.$http.get(`data/reviews/list.json`).then(rsp => this.reviewList = rsp.data)
    }
  }
};