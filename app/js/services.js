/* Services */


angular.module('myApp.services', [])
.service('UserService',['$cookieStore' , function($cookieStore){
	var user = {'token':'','userfullname':''};

	user.token = $cookieStore.get('token');
	user.userfullname = $cookieStore.get('userfullname');

	this.setToken = function(myToken){
		user.token = myToken;
		$cookieStore.put('token',myToken);
	};

	this.setUserFullName = function(myToken){
		user.userfullname = myToken;
		$cookieStore.put('userfullname',myToken);
	};

	this.getUser = function (){
		return user;
	};

	this.logout = function(){
		$cookieStore.remove('token');
	};
}])
// eks.:
// TransferService.get('post' , objData).success(handleSuccessFunction);
.factory('TransferService',['$http',function($http){
	return {
		get: function(method,objData) {
			if(method === 'get'){
				return $http.get('/api/?data=' + angular.toJson(objData) );
			}else if(method === 'post'){
				return $http.post('/api',objData);
			}else{
				console.log('post or get');
			}

		}
	};
}])
;


