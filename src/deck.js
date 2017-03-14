
let cardPossibilities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

/**
 * Exports a deck of cards to be used in the game of war
 * @return {Array} Returns a shuffled deck of 52 cards
 */
module.exports = function deckOfCards() {
  let cards = [];

  for ( let i=1; i<=4; i++ ) {
    cards = cards.concat(cardPossibilities);
  }

  let temporaryPlace;

  for ( let i=0; i<100; i++ ) {
    let randomNumber = Math.floor( Math.random() * 52 );
    let randomSpot = Math.floor( Math.random() * 52 );
    temporaryPlace = cards[randomSpot];
    cards[randomSpot] = cards[randomNumber];
    cards[randomNumber] = temporaryPlace;
  }

  return cards;
};

//allowed me to see the deck creation process
// let myDeck = deckOfCards();
// console.log(myDeck); //spits out the whole deck of cards
// module.exports();
