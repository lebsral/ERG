'use strict';

/**
 * @ngdoc service
 * @name ergApp.allMaterials
 * @description
 * # allMaterials
 * Factory in the ergApp.
 */
angular.module('ergApp')
  .factory('allMaterials', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
