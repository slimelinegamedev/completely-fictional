'use strict';

System.register(['angular', 'angular-ui-router', './app.router.js', './app.ctrl.js'], function (_export) {
	var angular, router, ndxCtrl;
	return {
		setters: [function (_angular) {
			angular = _angular.default;
		}, function (_angularUiRouter) {}, function (_appRouterJs) {
			router = _appRouterJs.default;
		}, function (_appCtrlJs) {
			ndxCtrl = _appCtrlJs.default;
		}],
		execute: function () {
			angular.module('completely-fictional', ['ui.router']).config(router).controller('ndxCtrl', ndxCtrl);
		}
	};
});