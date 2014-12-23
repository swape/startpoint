/* Services */

angular.module('myApp.services', [])
.factory('TransferService',['$http',function($http){
	return {
		get: function(objData) {
			return $http.get('/api/?data=' + angular.toJson(objData));
		},
		post:function(objData) {
			return $http.post('/api/',objData);
		}
	};
}]);
