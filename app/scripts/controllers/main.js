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
  {
    Name: 'Acetaldehyde ammonia',
    GuideNum: 171,
    IdNum: 1841,
  },
  {
    Name: 'Acetaldehyde oxime',
    GuideNum: 129,
    IdNum: 2332,
  },
  {
    Name: 'Acetic acid, glacial',
    GuideNum: 132,
    IdNum: 2789,
  },
  {
    Name: 'Acetic acid, solution, more than 10% but not more than 80% acid',
    GuideNum: 153,
    IdNum: 2790,
  },
  {
    Name: 'Acetic acid, solution, more than 80% acid',
    GuideNum: 132,
    IdNum: 2789,
  },
  {
    Name: 'Acetic anhydride',
    GuideNum: 137,
    IdNum: 1715,
  },
  {
    Name: 'Acetone',
    GuideNum: 127,
    IdNum: 1090,
  },

    ];
  });
