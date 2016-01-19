(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$scope'];

  function SettingsController($scope) {
    var vm = this;
    vm.someValue = 'something';

    vm.save = function () {
      console.log('do something here', vm.user);
    };
  }

})();
