import angular from 'angular';
import 'angular-ui-router';
import router from './app.router.js';
import ndxCtrl from './app.ctrl.js';

export default 
	angular
		.module('completely-fictional', ['ui.router'])
		.config(router)
		.controller('ndxCtrl', ndxCtrl);