'use strict';

/**
 * @ngdoc function
 * @name ergApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ergApp
 */
angular.module('ergApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
