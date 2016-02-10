'use strict';

angular.module('copperford-angular-sandbox')

	.directive('showDate', function() {
		return {
			restrict: 'AE',
			template: '<div>The current date is {{date | date:\'yyyy-MM-dd\'}}</div>',

			link: function (scope) {
				scope.date = new Date();
			}
		};
	});