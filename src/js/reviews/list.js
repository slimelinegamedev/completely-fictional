const reviewList = Vue.extend({
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
      reviewList: [
        {
          link:'reviews/a-million-bears',
          title: `'a million bears' by Spencer Madsen`
        },
        {
          link:'reviews/agora',
          title: `'Agora' by Derek Piotr`,
        },
        {
          link:'reviews/fairfaxe',
          title: `'Fairfaxe' by Tristan Newcomb`,
        },
        {
          link:'reviews/lifted',
          title: `'Lifted, or The Story Is In The Soil, Keep Your Ear to the Ground' by Bright Eyes`,
        },
        {
          link:'reviews/lightning-lightening',
          title: `'Lightning/Lightening' by Katey Metcalf`,
        },
        {
          link:'reviews/limitless',
          title: `'Limitless' dir. by Neil Burger`,
        },
        {
          link:'reviews/oiplf',
          title: `'Only Interstellar Pinball Lives Forever' by Tristan Newcomb`,
        },
        {
          link:'reviews/rango',
          title: `'Rango' dir. by Gore Verbinski`,
        },
        {
          link:'reviews/sotcts',
          title: `'Summer of the Chew Toy Soul' by Tristan Newcomb`,
        },
      ]
    }
  }
});