(function () {
  'use strict';

  angular
    .module('myApp', ['ngAnimate', 'ngRoute'])
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/home/homeTemplate.html',
        title: 'Home'
      })
      .when('/settings', {
        templateUrl: 'js/settings/settingsTemplate.html',
        title: 'Settings'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();