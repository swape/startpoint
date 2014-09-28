/* Services */


angular.module('myApp.services', [])
.service('UserService',['$cookieStore' , function($cookieStore){
	var user = {'token':'','userfullname':'','uid':''};
	user.token = (typeof $cookieStore.get('token') !== 'undefined') ? $cookieStore.get('token') : '';
	user.userfullname = $cookieStore.get('userfullname');
	user.uid = $cookieStore.get('uid');

	this.setToken = function(myToken){
		user.token = myToken;
		$cookieStore.put('token',myToken);
	};

	this.setUserFullName = function(myToken){
		user.userfullname = myToken;
		$cookieStore.put('userfullname',myToken);
	};

	this.setUid = function(uid){
		user.uid = uid;
		$cookieStore.put('uid',uid);
	};

	this.getUid = function (){
		return user.uid;
	};

	this.getUser = function (){
		return user;
	};

	this.getToken = function (){
		return user.token;
	};

	this.logout = function(){
		$cookieStore.remove('token');
		user.token = '';
		user.userfullname = '';
	};
}])
.factory('TransferService',['$http',function($http){
	return {
		get: function(objData) {
			return $http.get('/api/?data=' + angular.toJson(objData));
		},
		post:function(objData) {
			return $http.post('/api/',objData);
		}
	};
}])
;


