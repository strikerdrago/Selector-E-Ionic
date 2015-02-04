'use strict';

/**
  * @ngdoc function
 * @name selectorE.controller: CardListCtrl
 * @description
 * # CardListCtrl
 * Controller of the selectorE
  */

angular.module('starter', ['ionic'])
	.controller('CardListCtrl', function ($scope) {
	$scope.type = '';
	$scope.color = '';
	$scope.cards = APP.cards;
	// $scope.cards = [];
	/*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
	$scope.toggleGroup = function(card) {
	  if ($scope.isGroupShown(card)) {
	    $scope.shownGroup = null;
	  } else {
	    $scope.shownGroup = card;
	  }
	};
	$scope.isGroupShown = function(card) {
	  return $scope.shownGroup === card;
	};

});