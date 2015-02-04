angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.type = '';
  $scope.color = '';
  $scope.cards = APP.cards;
  $scope.condensed = APP.condensed;
  $scope.notCondensed = function(){
    $scope.condense = true;
  }
  $scope.isCondensed = "isGroupShown(card)";


  $scope.toggleGroup = function(card) {
    if ($scope.isGroupShown(card)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = card;

    }
  };
  $scope.isGroupShown = function(card) {
    if (APP.condensed == false){
      return $scope.shownGroup === card;
       
    }
    else {
      return true;
    }
  }

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
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('LinksCtrl', function($scope, Links) {
  $scope.links = Links.all();
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
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
