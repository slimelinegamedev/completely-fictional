export class App {
  configureRouter(config, router) {
    config.title = 'Completely Fictional';
    config.map([
      { route: [''], name: 'home', moduleId: 'home', nav: false },
    ]);

        // Poetry
        // Essays
        // Reviews
        // Trackback
        // Large Round Eyes
        // Extras
    this.router = router;
  }
}
