(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    var vm = this;
    vm.someValue = 'Hello World';

  }
})();
