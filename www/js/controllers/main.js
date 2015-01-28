'use strict';

/**
  * @ngdoc function
 * @name selectorE.controller: CardListCtrl
 * @description
 * # CardListCtrl
 * Controller of the selectorE
  */

var whitecolor = '#F0F0F0';

angular.module('selectorE')
	.controller('CardListCtrl', function ($scope) {
	$scope.type = '';
	$scope.color = '';
	$scope.cards = APP.cards;
	// $scope.cards = [];
	}
);