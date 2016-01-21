var appRoot = 'src/';
var outputRoot = 'dist/';

var tree = {
  css: 'css/',
  jade: 'jade/',
  js: 'js/',
  html: 'html/',
};

var glob = {
  jade: '**/*.jade',
  js: '**/*.js',
  css: '*.css',
};

var paths = {
  app: appRoot,
  output: outputRoot,
  tree,
  glob
}

module.exports = paths;
