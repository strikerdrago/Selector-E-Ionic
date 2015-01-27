angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.type = '';
  $scope.color = '';
  $scope.cards = [
    {'set': 'WX01', 
    'number': '001' ,
    'name': 'Maiden of the Sun, Tamayorihime' ,
    'type': 1,
    'color': 'White',
    'imgcolor': '#FFFFFF',
     'stat': 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
   'cardText': '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'},
  {'set': 'WX01', 
  'number': '018' ,
  'name': 'Anti・Spell' ,
  'type': 2,
  'color': 'Blue',
  'imgcolor': '#0000AA',
  'stat': 'Arts / Blue / Cost: [B][ ]',
  'cardText': '[Spell Cut-in] Negate the effect of 1 Spell.'},
  {'set': 'WX01', 
  'number': '032' ,
  'name': 'SNATCHER' ,
  'type': 4,
  'color': 'Blue',
  'imgcolor': '#0000AA',
  'stat': 'Spell / Blue / Piruruk Only / Cost: [B][B][ ] / Burst Icon',
   'cardText': 'Your opponent discards 2 cards from their hand. Afterwards, if your opponent’s hand is 0, draw 1 card./[Life Burst]: Select 1 card from your opponent’s hand without looking, discard it.'},
    {'set': 'WX01', 
    'number': '033' ,
    'name': 'Phantom Beast God, Osaki' ,
    'type': 3,
    'color': 'Green',
    'imgcolor': '#00AA00',
    'stat': 'Signi / Green / Level: 4 / Power: 12000 / Midoriko Only / Burst Icon / 精生：地獣',
  'cardText': '[Normal]: When you use a Green Spell, Place the top card of your deck into Ener zone./[On Play][G]: Add 1 card from your Ener zone to hand./[Activate][G][G]: Put all Green cards from your Trash zone into your deck. Afterwards, shuffle your deck./[Life Burst]: EnerCharge 2'},
    {'set': 'WX02', 
    'number': '003' ,
    'name': 'Eldora × Mark IV' ,
    'type': 1,
    'color': 'Blue',
  'imgcolor': '#0000AA','stat': 'LRIG / Blue / Level: 4/ Limit: 11 / Eldora / Grow Cost: [B][B][B]',
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
  'imgcolor': '#F0F0F0',
    'stat': 'Spell / White / Tama Only / Burst Icon / Cost: [W][W]', 
  'cardText': 'Return 1 of your opponent’s Signi back to hand./[Life Burst]: Return 1 of your opponent’s Level 2 or lower Signi back to hand.'},
    {'set': 'WX02', 
    'number': '048' ,
    'name': 'Sacred Treasure, Magatama' ,
    'type': 3,
    'color': 'White',
    'imgcolor': '#F0F0F0',
    'stat': 'Signi / White / Level: 2 / Power: 3000 / Tama Only / 精武：アーム',
  'cardText': '[On Play]: Look at the top 3 cards of your Deck. Return them to the top of the Deck in any order.'},
  ];


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
});
