Vue.component('cf-navigation', {
  template: `
    <div class="column">
      <p class="nav-links"> 
        <a v-for="n in nav" v-link="n.link">{{n.name}}</a>
      </p>
    </div>
  `,
  data() {
    return { 
      nav: [
        { name: 'Poetry', link: '/poetry' },
        { name: 'Essays', link: '/essays' },
        { name: 'Reviews', link: '/reviews' },
        { name: 'Trackback', link: '/trackback' },
        { name: 'Large Round Eyes', link: '/large-round-eyes' },
        { name: 'Extras', link: '/extras' },
      ]
    }
  },
});