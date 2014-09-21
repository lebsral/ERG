'use strict';

/**
 * @ngdoc overview
 * @name ergApp
 * @description
 * # ergApp
 *
 * Main module of the application.
 */
angular
  .module('ergApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlossaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
