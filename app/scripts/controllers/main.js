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
    $scope.chemicals = [
    {
    	Name: 'AC',
    	GuideNum: 127,
        Poly: false,
    	IdNum: 1051,
        WRM: false,
    	CWA: true,
        TIH: true
    },
    {
    	Name: 'Acetal',
    	GuideNum: 127,
    	IdNum: 1088,
    },
    {
    	Name: 'Acetaldehyde',
    	GuideNum: 129,
    	IdNum: 1089,
    }
    ];
  });
