'use strict';

angular.module('copperford-angular-sandbox')

	.directive('show-date', function() {
		return {
			restrict: 'AE',
			templateUrl: 'scripts/date.html'
		};
	});