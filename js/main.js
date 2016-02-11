angular.module('apresApp', [])

angular.module('apresApp')
	.controller('apresController', ['$scope', 'mtnFactory', 'eventPromoFactory', function($scope, mtnFactory, eventPromoFactory){

$scope.globalSearch = ''

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


// MODAL FUNCTION

$scope.searchSite = ''

$scope.modalDetails = function(mtn) {
	$scope.selectedMtn = mtn
}
$scope.snowApres = function(){	
	if ($scope.selectedMtn) {
		var tempZip = []
		_.filter($scope.eventPromoArray, function(promo){
			if ($scope.selectedMtn.zip == promo.zip && (new Date(promo.date).getDate() == $scope.today.getDate() && new Date(promo.date).getDay() == $scope.today.getDay() && new Date(promo.date).getFullYear() == $scope.today.getFullYear())) {
				tempZip.push(promo)
			}
		})
		return tempZip
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

//  ===== DATES/CALENDAR VIEWS

$scope.today = new Date();

$scope.nextDay = function(){
			return {
				dateAdder 		: $scope.today.setDate($scope.today.getDate() + 1),	
			}
		}
$scope.prevDay = function(){
			return {
				dateSubtr 		: $scope.today.setDate($scope.today.getDate() - 1)
			}
		}

$scope.calendarArray = []

$scope.todayClicker = function(){
	$scope.today = new Date();
}

$scope.addDayClicker = function(){
	$scope.nextDay()
}
$scope.subtrDayClicker = function(){
	$scope.prevDay()
}


$scope.dayOfApres = function(){
	if ($scope.eventPromoArray) {
		return $scope.eventPromoArray.filter(function(todayPromo) {
			if (new Date(todayPromo.date).getDate() == $scope.today.getDate() && new Date(todayPromo.date).getDay() == $scope.today.getDay() && new Date(todayPromo.date).getFullYear() == $scope.today.getFullYear()) {
				return true
			}
			else {
				return false
			}
		})
	}
};	

// WEATHER ICONS
$scope.selectedMtn = {}
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

