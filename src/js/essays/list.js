const EssayList = Vue.extend({
  template: `
    <div class="content-image">
      <img src="images/essays/cf-sidebar-essays.jpg" width="100%"/>
    </div>
    <div class="content">
      <ul class="padding">
        <li v-for="essay in essayList">
          <a v-link='essay.link'>
            {{essay.title}}
          </a>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      essayList: [
        { 
          link:'essays/tree-of-life', 
          title: `We are all branches on the tree of life: an essay exploring meaning in 'The Tree of Life'` },
        { 
          link:'essays/internet-poetry', 
          title: `A minor and insignificant treatise on Internet Poetry, and the disparity between presence and person therein.`, 
        },
        { 
          link:'essays/lana-del-rey', 
          title: `Feminism, Image Obsession and Lana Del Rey, 'Born to Die'.`, 
        },
        { 
          link:'essays/max-payne-3', 
          title: `Max Payne 3, neo-noir, style and difficulty`, 
        },
        { 
          link:'http://banangolit.com/post/26441571350/guest-post-thoughts-on-walter-mackey-quickshit', 
          title: `Thoughts on Walter Mackey and Quickshit`, 
        },
      ]
    }
  }
});