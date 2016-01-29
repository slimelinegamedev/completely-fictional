 export default {
  template: `
    <div class="footer-index">
      <p>
        <a href="go-away/please">&copy;</a> 2010-{{new Date().getFullYear()}} &mdash; <a href="/">Zack Schuster</a>.
         All content licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/us/">CC BY-NC 3.0</a>
      </p>
      <div style="margin-bottom:4.9em;" class="socialmedia">
        <a v-for="f in footer" :href="f.url" class="smimg">
          <img :src="f.source" :alt="f.txt" width="10%"/>
        </a>
      </div>
    </div>
  `,
  data() {
    return {
      footer: [
        { url: 'http://medium.com/@destroyvegas', source: 'images/medium.jpeg', txt: 'medium', },
        { url: 'http://www.twitter.com/destroyvegas', source: 'images/twitter.png', txt: 'twitter', },
        { url: 'http://somewhatnonfictional.tumblr.com', source: 'images/tumblr.png', txt: 'tumblr', },
        { url: 'http://www.flickr.com/photos/zackschuster/', source: 'images/flickr.png', txt: 'flickr', },
      ]
    };
  }
};