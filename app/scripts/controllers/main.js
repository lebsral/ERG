'use strict';

/**
 * @ngdoc function
 * @name ergApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ergApp
 */
angular.module('ergApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
