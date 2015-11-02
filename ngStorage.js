/**
 * Save in local storage single variable or JSON object
 */

angular.module('ngStorage', [])
.factory('$localStorage', ['$window', function($window){
	return {
		set: function(key, obj){
			if(typeof obj === "object" && Array.isArray(obj))
				return $window.localStorage.setItem(key, JSON.stringify(obj));
			else
				return $window.localStorage.setItem(key, obj);
		},
		
		get: function(key){
			try{
				//Verifico se un oggetto
				var value = JSON.parse($window.localStorage.getItem(key));
				if(value === null)
					return false;
				else
					return value;
				
			}catch(e){ //Altrimenti stringa semplice
				if($window.localStorage[key] === null)
					return false;
				else
					return $window.localStorage[key];
			}
		},

		remove: function(key){
			return $window.localStorage.removeItem(key);
		}
	};
}]);
