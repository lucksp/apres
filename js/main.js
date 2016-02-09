angular.module('apresApp', [])

angular.module('apresApp')
	.controller('apresController', ['$scope', 'mtnFactory', 'eventPromoFactory', function($scope, mtnFactory, eventPromoFactory){

		$scope.mtnsArray = mtnFactory.mtnsData;

		var returnMtns = function(response) {

			if (mtnFactory.mtnsData.length == 0){
				response.data.forEach(function(item){
					new quoteFactory.MountainObj(item.id, item.name, item.city, item.zip, item.state, item.lifts, item.trails, this.hi, this.low, this.description, this.lastSnow, this.icon, this.HiOne, this.LowOne, this.IconOne, this.HiTwo, this.LowTwo, this.IconTwo, this.HiThree, this.LowThree, this.IconThree)
				})
			}
					console.log($scope.mtnsArray)

		}
		mtnFactory.get().then(returnMtns)


}]);