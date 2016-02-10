
(function () {
	'use strict';

	angular.module('demoApp', ['copperford-angular-sandbox', 'ngRoute', 'ui.bootstrap'])

		.config(['$routeProvider', '$compileProvider', function ($routeProvider) {
			$routeProvider
				.when('/basic-example', {
					templateUrl: 'views/basic-example.html'
				})
				.when('/basic-example-twice', {
					templateUrl: 'views/basic-example-twice.html'
				})
				.otherwise({
					redirectTo: '/basic-example'
				});
		}]);
})();
