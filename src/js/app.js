import angular from 'angular';
import 'angular-ui-router';

import router from './app.router.js';
import ndxCtrl from './app.ctrl.js';
import header from './header.component';
import column from './column.component';
import footer from './footer.component';
import poetryNav from './poetryNav.component';

angular
	.module('completely-fictional', ['ui.router'])
	.config(router)
	.controller('ndxCtrl', ndxCtrl)
  .component('cfHeader', header)
  .component('cfColumn', column)
  .component('cfFooter', footer)
  .component('cfPoetryNav', poetryNav);
