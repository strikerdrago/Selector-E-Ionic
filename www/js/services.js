angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

.factory('Cards', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cards = [{
    id: 0,
    set: 'WX01', 
    number: '001' ,
    name: 'Maiden of the Sun, Tamayorihime' ,
    type: 1,
    color: 'White',
    stat: 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
    cardText: '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.',
    favorite: 0
  }, {
    id: 1,
    set: 'WX01', 
    number: '018' ,
    name: 'Anti・Spell' ,
    type: 2,
    color: 'Blue',
    stat: 'Arts / Blue / Cost: [B][ ]',
    cardText: '[Spell Cut-in] Negate the effect of 1 Spell.',
    favorite: 0
  }, {
    id: 2,
    set: 'WX01', 
    number: '032' ,
    name: 'SNATCHER' ,
    type: 4,
    color: 'Blue',
    stat: 'Spell / Blue / Piruruk Only / Cost: [B][B][ ] / Burst Icon',
    cardText: 'Your opponent discards 2 cards from their hand. Afterwards, if your opponent’s hand is 0, draw 1 card./[Life Burst]: Select 1 card from your opponent’s hand without looking, discard it.',
    favorite: 0
  }, {
    id: 3,
    set: 'WX01', 
    number: '033' ,
    name: 'Phantom Beast God, Osaki' ,
    type: 3,
    color: 'Green',
    stat: 'Signi / Green / Level: 4 / Power: 12000 / Midoriko Only / Burst Icon / 精生：地獣',
    cardText: '[Normal]: When you use a Green Spell, Place the top card of your deck into Ener zone./[On Play][G]: Add 1 card from your Ener zone to hand./[Activate][G][G]: Put all Green cards from your Trash zone into your deck. Afterwards, shuffle your deck./[Life Burst]: EnerCharge 2',
    favorite: 0
  }, {
    id: 4,
    set: 'WX02', 
    number: '003' ,
    name: 'Eldora × Mark IV' ,
    type: 1,
    color: 'Blue',
    stat: 'LRIG / Blue / Level: 4/ Limit: 11 / Eldora / Grow Cost: [B][B][B]  ',
    cardText: '[Normal]: Each time your Life Cloth gets crushed, you may draw 1 card.',
    favorite: 0
  }, {
    id: 5,
    set: 'WX02', 
    number: '020' ,
    name: 'Bloody・Slash' ,
    type: 2,
    color: 'Black',
    imgcolor: 'a',
    stat: 'Arts / Black / Cost: [D][D]',
    cardText: '[Main Phase][Attack Phase][Spell Cut-in] Place 1 of your   Signi into Trash. If you do so, banish 1 of your opponent’s Signi.',
    favorite: 0
  }, {
    id: 6,
    set: 'WX02', 
    number: '031' ,
    name: 'Get・Bound' ,
    type: 4,
    color: 'White',
    stat: 'Spell / White / Tama Only / Burst Icon / Cost: [W][W]', 
    cardText: 'Return 1 of your opponent’s Signi back to hand./[Life Burst  ]: Return 1 of your opponent’s Level 2 or lower Signi back to hand.',
    favorite: 0
  }, {
    id: 7,
    set: 'WX02', 
    number: '034' ,
    name: 'Undesirable Impulse' ,
    type: 4,
    color: 'Red',
    stat: 'Spell / Red / Yuzuki Only / Burst Icon / Cost: [R][G]', 
    cardText: 'If your Ener Zone has a Red card and a Green card, banish 1 Signi./[Life Burst] If your Ener Zone has a Red card and a Green card, banish 1 Signi.',
    favorite: 0
  },  {
    id: 8,
    set: 'WX02', 
    number: '048' ,
    name: 'Sacred Treasure, Magatama' ,
    type: 3,
    color: 'White',
    stat: 'Signi / White / Level: 2 / Power: 3000 / Tama Only / 精武：アーム',
    cardText: '[On Play]: Look at the top 3 cards of your Deck. Return them to the top of the Deck in any order.',
    favorite: 0
  }, {
    id: 9,
    set: 'WX02', 
    number: '076' ,
    name: 'Servant Q2' ,
    type: 3,
    color: 'Colorless',
    stat: 'Signi / Colorless / Level: 4 / Power: 10000 / Guard / 精元',
    cardText: '[Normal]: [Multi Ener] (When paying cost with this card, this card is treated as having all colors.',
    favorite: 0
  }];

  return {
    all: function() {
      return cards;
    },
    remove: function(card) {
      cards.splice(cards.indexOf(chat), 1);
    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === parseInt(cardId)) {
          return cards[i];
        }
      }
      return null;
    },
    set: function(cardId, fav) {
      cards[cardId].favorite = fav;
      return null;
    }
  }
})

.factory('Links', function() {
  var links = [{
    id: 0,
    name: 'Takara TOMY WIXOSS Home Page (Japanese)',
    notes: 'The official card game site',
    link: 'http://www.takaratomy.co.jp/products/wixoss/',
    // img: 'http://selector-wixoss.com/images/common/banners/bnr_WIXOSS.png'
    img: 'https://pbs.twimg.com/profile_images/1061207754/T___normal.gif'
  }, {
    id: 1,
    name: 'WIXOSS TV Anime Home Page (Japanese)',
    notes: 'The official site for the anime',
    link: 'http://selector-wixoss.com/',
    // img: 'http://selector-wixoss.com/images/common/banners/bnr_infected.png'
    img: 'http://selector-wixoss.com/favicon.ico'
  }, {
    id: 2,
    name: 'WIXOSS TCG Official Twitter (Japanese)',
    notes: 'The official game account',
    link: 'https://twitter.com/wixoss_TCG',
    img: 'https://pbs.twimg.com/profile_images/435316672744792064/hEI_FUmU.jpeg'
  }, {
    id: 3,
    name: 'Selector Battle with WIXOSS Phone Application Home Page (Japanese)',
    notes: 'The official game app site',
    link: 'https://selector-app.com/',
    img: 'https://pbs.twimg.com/profile_images/519041308849995776/KmviWOer.jpeg'
  }, {
    id: 4,
    name: 'Selector wikia WIXOSS (English)',
    notes: 'Unofficial wiki site',
    link: 'http://selector-wixoss.wikia.com/wiki/WIXOSS',
    img: 'http://selector-wixoss.com/present/icon06.png'
  }, {
    id: 5,
    name: 'The Draw Phase (English)',
    notes: 'Unofficial translation blog',
    link: 'https://thedrawphase.wordpress.com/',
    img: 'http://selector-wixoss.com/present/icon01.png'



  }];


  return {
    all: function() {
      return links;
    },
    get: function(linkId) {
      // Simple index lookup
      return links[linkId];
    }
  }
});