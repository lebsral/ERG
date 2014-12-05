'use strict';

/**
 * @ngdoc function
 * @name ergApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ergApp
 */
angular.module('ergApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


$scope.chemicals =[
  {
    Name: 'AC',
    GuideNum: 117,
    IdNum: 1051,
    CWA: true,
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
  },
  ];

    $http.get('../../data/materials.json').success(function(data){
      $scope.some = data;

    


      
  });

    });
