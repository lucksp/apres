angular.module('apresApp', [])

angular.module('apresApp')
	.controller('apresController', ['$scope', 'mtnFactory', 'eventPromoFactory', function($scope, mtnFactory, eventPromoFactory){

// **** SKI RESORT FUNCTIONS ****

		var returnMtns = function(responseMtn) {
			if (mtnFactory.mtnsData.length === 0){
				responseMtn.data.forEach(function(itemMtn){
					new mtnFactory.MountainObj(itemMtn.id, itemMtn.name, itemMtn.city, itemMtn.zip, itemMtn.state, itemMtn.lifts, itemMtn.trails, itemMtn.logoUrl, itemMtn.hi, itemMtn.low, itemMtn.description, itemMtn.lastSnow, itemMtn.HiOne, itemMtn.LowOne, itemMtn.IconOne, itemMtn.HiTwo, itemMtn.LowTwo, itemMtn.IconTwo, itemMtn.HiThree, itemMtn.LowThree, itemMtn.IconThree)
				})
			}
		}

		mtnFactory.get().then(returnMtns)

		$scope.mtnsArray = mtnFactory.mtnsData;


// **** APRES EVENTS/PROMO FUNCTIONS ****

		var returnApres = function(responseApres) {
			if (eventPromoFactory.eventPromoArray.length === 0){
				responseApres.data.forEach(function(itemApres) {
					new eventPromoFactory.EventPromoObj(itemApres.id, itemApres.name, itemApres.address, itemApres.city, itemApres.state, itemApres.zip, itemApres.type, itemApres.category, itemApres.rating, itemApres.date, itemApres.promotion, itemApres.code, itemApres.repeat)
				})
			}
		}

		eventPromoFactory.get().then(returnApres)

		$scope.eventPromoArray = eventPromoFactory.eventPromoArray

// TRAFFIC CARD

	$scope.selectMtnDirx = function(index){
		console.log('hello', index, $scope.mtnsArray[index], $scope.addy)
	}

}]);

