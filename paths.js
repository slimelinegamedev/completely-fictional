var appRoot = 'src/';
var outputRoot = 'dist/';

var folder = {
  css: 'css/',
  jade: 'jade/',
  js: 'js/',
  html: 'html/',
};

var glob = {
  jade: '**/*.jade',
  js: '*.js',
  css: '*.css',
};

module.exports = {
  root: './',
  jsRoot: appRoot + folder.js + glob.js,
  jadeRoot: appRoot + folder.jade + glob.jade,
  indexRoot: appRoot + folder.jade + 'index.jade',
  statesRoot: [
    appRoot + folder.jade + glob.jade, 
    '!' + appRoot + folder.jade + 'index.jade'
  ],
  jsOutput: outputRoot + folder.js,
  htmlOutput: outputRoot + folder.html,
  cssOutput: outputRoot + folder.css,
}

