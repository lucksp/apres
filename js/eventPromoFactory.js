angular.module('apresApp')
	.factory('eventPromoFactory', ['$http', function($http){

	var eventPromoArray = [];
	var EventPromoObj = function( id, name, address, city, state, zip, type, category, rating, date, promotion, code, repeat ){

		this.id				=id;
		this.name			=name;
		this.address		=address;
		this.city			=city;
		this.state			=state;
		this.zip			=zip;
		this.type			=type;
		this.category		=category;
		this.rating			=rating;
		this.date			=date;
		this.promotion		=promotion;
		this.code			=code;
		this.repeat			=repeat;
		eventPromoArray.push(this)
		
	}

		return {

			eventPromoArray	:eventPromoArray,
			EventPromoObj 	:EventPromoObj,
				get 		:function(){
			return $http.get('apresdata.json')
		}

		}

	}]);