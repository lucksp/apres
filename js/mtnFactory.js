angular.module('apresApp')
	.factory('mtnFactory', ['$http', function ($http) {

		var mtnsData = [];
		var MountainObj = function (id, name, city, zip, state, lifts, trails, logoUrl, hi, low, description, lastSnow, HiOne, LowOne, IconOne, HiTwo, LowTwo, IconTwo, HiThree, LowThree, IconThree) {

			this.id = id;
			this.name = name;
			this.city = city;
			this.zip = zip;
			this.state = state;
			this.lifts = lifts;
			this.trails = trails;
			this.logoUrl = logoUrl;
			// this.skiMap		= skiMap; 
			this.hi = hi;
			this.low = low;
			this.description = description;
			this.lastSnow = lastSnow;
			this.HiOne = HiOne;
			this.LowOne = LowOne;
			this.IconOne = IconOne;
			this.HiTwo = HiTwo;
			this.LowTwo = LowTwo;
			this.IconTwo = IconTwo;
			this.HiThree = HiThree;
			this.LowThree = LowThree;
			this.IconThree = IconThree;
			mtnsData.push(this)

		};

		return {

			MountainObj: MountainObj,
			mtnsData: mtnsData,
			get: function () {
				return $http.get('resortdata.json')
			}
		};

	}]);

