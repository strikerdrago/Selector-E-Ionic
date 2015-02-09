angular.module('starter.controllers', [])

// all controllers located here as done by Ionic Framework

.controller('HomeCtrl', function($scope, Cards) {
  $scope.type = '';
  $scope.color = '';
  $scope.favorite = 1;
  $scope.condensed = false;
  // $scope.faviconclass = "icon ion-ios7-star-outline button";

  $scope.cards = Cards.all();


  $scope.setCard = function(cardId, favorite) {
    if (Cards.get(cardId).favorite == 0){
      Cards.set(cardId, 1);
      // $scope.faviconclass = "icon ion-ios7-star button button-energized";
    }
    else {
      Cards.set(cardId, 0);
      // $scope.faviconclass = "icon ion-ios7-star-outline button";
    }
  }

  // toggles the group based on this thread: 
  // http://forum.ionicframework.com/t/accordion-list/2832
  $scope.toggleGroup = function(card) {
    if ($scope.isGroupShown(card)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = card;

    }
  };
  $scope.isGroupShown = function(card) {
    if ($scope.condensed == false){
      return $scope.shownGroup === card;
    }
    else {
      return true;
    }
  }

  // expand all functions
  $scope.notCondensed = function(){
    $scope.condense = true;
  }
  $scope.isCondensed = "isGroupShown(card)";

   $scope.condenser = function() {
    if ($scope.condensed == false) {
      $scope.condensed = true;

    } else{
      $scope.condensed = false;
    }
    return $scope.condensed;
  }
})


.controller('LinksCtrl', function($scope, Links) {
  $scope.links = Links.all();
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableCondensed: APP.condensed
  }

   $scope.condenser = function() {
    if (APP.condensed == false) {
      APP.condensed = true;

    } else{
      APP.condensed = false;
    }
    return APP.condensed;
  }
});
