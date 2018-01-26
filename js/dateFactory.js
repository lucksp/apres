angular.module('apresApp')
	.factory('dateFactory', ['$http', function ($http) {

		var baseDate = new Date();
		var nextDay = function () {
			return {
				dateAdder: baseDate.setDate(baseDate.getDate() + 1),
			}
		}
		var prevDay = function () {
			return {
				dateSubtr: baseDate.setDate(baseDate.getDate() - 1)
			}
		}

		return {
			nextDay: nextDay,
			prevDay: prevDay
		}
	}]);