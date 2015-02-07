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
    cardText: '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'
  }, {
    id: 1,
    set: 'WX01', 
    number: '001' ,
    name: 'Maiden of the Sun, Tamayorihime' ,
    type: 1,
    color: 'White',
    stat: 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
    cardText: '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'
  }, {
    id: 2,
    set: 'WX01', 
    number: '001' ,
    name: 'Maiden of the Sun, Tamayorihime' ,
    type: 1,
    color: 'White',
    stat: 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
    cardText: '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'
  }, {
    id: 3,
    set: 'WX01', 
    number: '001' ,
    name: 'Maiden of the Sun, Tamayorihime' ,
    type: 1,
    color: 'White',
    stat: 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
    cardText: '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'
  }, {
    id: 4,
    set: 'WX01', 
    number: '001' ,
    name: 'Maiden of the Sun, Tamayorihime' ,
    type: 1,
    color: 'White',
    stat: 'LRIG / White / Level: 4 / Limit: 11 / Tama / Grow Cost: [W][W][W]',
    cardText: '[Activate][W]Discard 1 White Signi from hand: Return 1 of your opponent’s Signi back to hand.'
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