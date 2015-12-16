export class App {
  configureRouter(config, router) {
    config.title = 'Completely Fictional';
    config.map([
      { route: [''], name: 'home', moduleId: 'home', nav: false },
      { route: ['poetry'], name: 'poetry', moduleId: 'poetry', nav: true, title: 'Poetry' },
      { route: ['essays'], name: 'essays', moduleId: 'essays', nav: true, title: 'Essays' },
      { route: ['reviews'], name: 'reviews', moduleId: 'reviews', nav: true, title: 'Reviews' },
      { route: ['trackback'], name: 'trackback', moduleId: 'trackback', nav: true, title: 'Trackback' },
      { route: ['large-round-eyes'], name: 'large-round-eyes', moduleId: 'large-round-eyes', nav: true, title: 'Large Round Eyes' },
      { route: ['extras'], name: 'extras', moduleId: 'extras', nav: true, title: 'Extras' },
    ]);
    
    this.router = router;
  }
}
