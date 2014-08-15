/* Directives */


angular.module('myApp.directives', [])
.directive('a', function() {
	return {
		restrict: 'E',
		link: function(elem, attrs) {
			if (attrs.href === '') {
				elem.on('click', function(e) {
					e.preventDefault();
				});
			}
		}
	};

}).directive('mySignin',function(){
	return {
		restrict: 'E',
		controller: 'mySigninController',
		templateUrl: mainpath + 'partials/signin.html'
	}
})

;
