/* Controllers */

angular.module('myApp.controllers', [])

.controller('startController', ['$scope' ,'UserService', function($scope ,UserService) {
	$scope.user = UserService.getUser();


}])
.controller('mySigninController', ['$scope','UserService','$modal', function($scope,UserService,$modal){
	$scope.LogOut = function(){
		UserService.logout();
		$scope.user = {};
		window.location.href= mainpath + "/";
	}

	if(typeof $scope.user.token === 'undefined' || $scope.user.token === '' ){
		$modal.open({
			templateUrl: 'partials/signinForm.html',
			controller : 'mySigninAction',
			keyboard :false,
			backdrop: 'static'
		});
	}
}])
.controller('mySigninAction', ['$scope','UserService','$modalInstance', function($scope,UserService,$modalInstance){

	$scope.LogIn = function(form){
		console.log(form);
		// TODO: using form.username and form.password to login
		// then set token and close

		//UserService.setToken(1234);
		$scope.user = UserService.getUser();
		$modalInstance.close($scope.user);
	}

}])


;


