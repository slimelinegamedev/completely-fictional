export default {
  template: `
    <div class="content-image">
      <img src="images/essays/cf-sidebar-essays.jpg" width="100%"/>
    </div>
    <div class="content">
      <ul class="padding">
        <li v-for="essay in essayList">
          <a :href='essay.link'>
            {{essay.title}}
          </a>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      essayList: this.$http.get(`data/essays/list.json`).then(rsp => this.essayList = rsp.data)
    };
  }
};