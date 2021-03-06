'use strict';

// declaring the module in one file / anonymous function
angular.module('copperford-angular-sandbox',[]);


'use strict';

angular.module('copperford-angular-sandbox')

	.directive('showDate', function() {
		return {
			restrict: 'AE',
			template: '<div class=\'copperford-date\'>The current date is {{date | date:\'yyyy-MM-dd\'}}</div>',

			link: function (scope) {
				scope.date = new Date();
			}
		};
	});