'use strict';

angular.module('cris-common-angular')

	.directive('show-date', function() {
		return {
			restrict: 'AE',
			templateUrl: 'scripts/date.html'
		};
	});