'use strict';

/**
 * @ngdoc function
 * @name selectorE.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the selectorE
 */
angular.module('selectorE')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
