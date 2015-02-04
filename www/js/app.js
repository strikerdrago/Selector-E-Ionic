// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var APP = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.tabs.position("bottom");
  
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

  .state('tab.links', {
      url: '/links',
      views: {
        'tab-links': {
          templateUrl: 'templates/tab-links.html',
          controller: 'LinksCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  })  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

//some models for all controllers

APP.cards = [
    {'set': 'WX01', 
    'number': '001' ,
    'name': 'Maiden of the Sun, Tamayorihime' ,
    'type': 1,
    'color': 'White',
     'stat': 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
   'cardText': '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'},
  {'set': 'WX01', 
  'number': '018' ,
  'name': 'Anti・Spell' ,
  'type': 2,
  'color': 'Blue',
  'stat': 'Arts / Blue / Cost: [B][ ]',
  'cardText': '[Spell Cut-in] Negate the effect of 1 Spell.'},
  {'set': 'WX01', 
  'number': '032' ,
  'name': 'SNATCHER' ,
  'type': 4,
  'color': 'Blue',
  'stat': 'Spell / Blue / Piruruk Only / Cost: [B][B][ ] / Burst Icon',
   'cardText': 'Your opponent discards 2 cards from their hand. Afterwards, if your opponent’s hand is 0, draw 1 card./[Life Burst]: Select 1 card from your opponent’s hand without looking, discard it.'},
    {'set': 'WX01', 
    'number': '033' ,
    'name': 'Phantom Beast God, Osaki' ,
    'type': 3,
    'color': 'Green',
    'stat': 'Signi / Green / Level: 4 / Power: 12000 / Midoriko Only / Burst Icon / 精生：地獣',
  'cardText': '[Normal]: When you use a Green Spell, Place the top card of your deck into Ener zone./[On Play][G]: Add 1 card from your Ener zone to hand./[Activate][G][G]: Put all Green cards from your Trash zone into your deck. Afterwards, shuffle your deck./[Life Burst]: EnerCharge 2'},
    {'set': 'WX02', 
    'number': '003' ,
    'name': 'Eldora × Mark IV' ,
    'type': 1,
    'color': 'Blue',
  'stat': 'LRIG / Blue / Level: 4/ Limit: 11 / Eldora / Grow Cost: [B][B][B]',
  'cardText': '[Normal]: Each time your Life Cloth gets crushed, you may draw 1 card.'},
  {'set': 'WX02', 
  'number': '020' ,
  'name': 'Bloody・Slash' ,
  'type': 2,
  'color': 'Black',
  'imgcolor': 'a',
    'stat': 'Arts / Black / Cost: [D][D]',
  'cardText': '[Main Phase][Attack Phase][Spell Cut-in] Place 1 of your Signi into Trash. If you do so, banish 1 of your opponent’s Signi.'},
  {'set': 'WX02', 
  'number': '031' ,
  'name': 'Get・Bound' ,
  'type': 4,
  'color': 'White',
    'stat': 'Spell / White / Tama Only / Burst Icon / Cost: [W][W]', 
  'cardText': 'Return 1 of your opponent’s Signi back to hand./[Life Burst]: Return 1 of your opponent’s Level 2 or lower Signi back to hand.'},
  {'set': 'WX02', 
  'number': '034' ,
  'name': 'Undesirable Impulse' ,
  'type': 4,
  'color': 'Red',
    'stat': 'Spell / Red / Yuzuki Only / Burst Icon / Cost: [R][G]', 
  'cardText': 'If your Ener Zone has a Red card and a Green card, banish 1 Signi./[Life Burst] If your Ener Zone has a Red card and a Green card, banish 1 Signi.'},
  {'set': 'WX02', 
  'number': '048' ,
  'name': 'Sacred Treasure, Magatama' ,
  'type': 3,
  'color': 'White',
    'stat': 'Signi / White / Level: 2 / Power: 3000 / Tama Only / 精武：アーム',
  'cardText': '[On Play]: Look at the top 3 cards of your Deck. Return them to the top of the Deck in any order.'},
  {'set': 'WX02', 
  'number': '076' ,
  'name': 'Servant Q2' ,
  'type': 3,
  'color': 'Colorless',
    'stat': 'Signi / Colorless / Level: 4 / Power: 10000 / Guard / 精元',
  'cardText': '[Normal]: [Multi Ener] (When paying cost with this card, this card is treated as having all colors.'},
  ]; // "global"

APP.cardsSelected = []; //add card results to this to show
