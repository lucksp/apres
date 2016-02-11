angular.module('apresApp', [])

angular.module('apresApp')
	.controller('apresController', ['$scope', 'mtnFactory', 'eventPromoFactory', 'dateFactory', function($scope, mtnFactory, eventPromoFactory, dateFactory){


// **** SKI RESORT PAGE FUNCTIONS ****

		var returnMtns = function(responseMtn) {
			if (mtnFactory.mtnsData.length === 0){
				responseMtn.data.forEach(function(itemMtn){
					new mtnFactory.MountainObj(itemMtn.id, itemMtn.name, itemMtn.city, itemMtn.zip, itemMtn.state, itemMtn.lifts, itemMtn.trails, itemMtn.logoUrl, itemMtn.hi, itemMtn.low, itemMtn.description, itemMtn.lastSnow, itemMtn.HiOne, itemMtn.LowOne, itemMtn.IconOne, itemMtn.HiTwo, itemMtn.LowTwo, itemMtn.IconTwo, itemMtn.HiThree, itemMtn.LowThree, itemMtn.IconThree)
				})
			}
		}

		mtnFactory.get().then(returnMtns)

		$scope.mtnsArray = mtnFactory.mtnsData;

	$scope.sortSnowType     = 'lastSnow'; // set the default sort type
 	$scope.sortSnowReverse  = true;  // set the default sort order
	$scope.searchSnowData   = '';     // set the default search/filter term

// MODAL FUNCTION

$scope.modalDetails = function(mtn) {
	$scope.selectedMtn = mtn
}

$scope.snowApres = function(){	
	if ($scope.selectedMtn) {
		return _.filter($scope.eventPromoArray, function(promo){
			if ($scope.selectedMtn.zip == promo.zip) {
				return promo
			}
		})
	}
	else {
		return []
	}
}

// SKI REPORT PAGE ==== MODAL POP

	$scope.couponInputAppear = false;
	$scope.couponSuccess = false;
	$scope.couponClick = function() {
		$scope.couponInputAppear = !$scope.couponInputAppear;
		}
	$scope.submitClick = function(){
					$scope.couponSuccess = !$scope.couponSuccess;
					$scope.couponInputAppear = !$scope.couponInputAppear;
	}


// **** APRES EVENTS/PROMO PAGE FUNCTIONS ****

		var returnApres = function(responseApres) {
			if (eventPromoFactory.eventPromoArray.length === 0){
				responseApres.data.forEach(function(itemApres) {
					new eventPromoFactory.EventPromoObj(itemApres.id, itemApres.name, itemApres.address, itemApres.city, itemApres.state, itemApres.zip, itemApres.type, itemApres.category, itemApres.rating, itemApres.date, itemApres.promotion, itemApres.code, itemApres.repeat)
				})
			}
		}

		eventPromoFactory.get().then(returnApres)

		$scope.eventPromoArray = eventPromoFactory.eventPromoArray

	$scope.sortApresType     = 'date'; // set the default sort type
 	$scope.sortApresReverse  = false;  // set the default sort order
	$scope.searchApresData   = '';     // set the default search/filter term


//  ===== DATES/CALENDAR

$scope.today = new Date();

$scope.nextDay = function(){
			return {
				dateAdder 		: $scope.today.setDate($scope.today.getDate() + 1),	
			}
		}
$scope.prevDay = function(){
			return {
				dateSubtr 		: $scope.nextDay.setDate($scope.nextDay.getDate() - 1)
			}
		}

$scope.calendarArray = []

$scope.addDayClicker = function(){
	$scope.calendarArray.push($scope.nextDay())
}

//    **** LEFT CLICK TO REMOVE DAYS NOT FINISHED ****
// $scope.subtrDayClicker = function(){
// 	$scope.calendarArray.pop($scope.nextDay())
// }


//    ****  COMPLETE ONLY SHOWING APRES FOR CURRENT DAY ****
// $scope.dayOfApres = function(promo){	
// 	if ($scope.eventPromoArray.date == $scope.today) {
// 		console.log('today')
// 		return promo
// 		}
// 	}
// 	else {
// 		return 'nope'
// 	}
// }


// WEATHER ICONS

	$scope.getIcon = function(mtn){

	if(mtn.IconOne == 1){
		return '../img/icon_sunny.png';
	}
	else if(mtn.IconOne == 2){
		return '../img/icon_mostlysunny.png';
	}
	else if(mtn.IconOne == 3){
		return '../img/icon_overcast.png';
	}
	else {
		return '../img/icon_snow.png';
	}
}

	$scope.getForecastIconOne = function(selectedMtn){

	if(selectedMtn.IconOne == 1){
		return '../img/icon_sunny.png';
	}
	else if(selectedMtn.IconOne == 2){
		return '../img/icon_mostlysunny.png';
	}
	else if(selectedMtn.IconOne == 3){
		return '../img/icon_overcast.png';
	}
	else {
		return '../img/icon_snow.png';
	}
}

	$scope.getForecastIconTwo = function(selectedMtn){

	if(selectedMtn.IconTwo == 1){
		return '../img/icon_sunny.png';
	}
	else if(selectedMtn.IconTwo == 2){
		return '../img/icon_mostlysunny.png';
	}
	else if(selectedMtn.IconTwo == 3){
		return '../img/icon_overcast.png';
	}
	else {
		return '../img/icon_snow.png';
	}
}

	$scope.getForecastIconThree = function(selectedMtn){

	if(selectedMtn.IconThree == 1){
		return '../img/icon_sunny.png';
	}
	else if(selectedMtn.IconThree == 2){
		return '../img/icon_mostlysunny.png';
	}
	else if(selectedMtn.IconThree == 3){
		return '../img/icon_overcast.png';
	}
	else {
		return '../img/icon_snow.png';
	}
}

}]);

