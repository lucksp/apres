angular.module('apresApp')
	.factory('eventPromoFactory', [function(){

	var eventPromoList = [];
	var EventPromoObj = function( id, name, location, description ){

		this.id				=id,
		this.name			=name,
		this.location		=location,
		this.description	=description
		
	}

		return {

			eventPromoList	:eventPromoList

		}

	}]);