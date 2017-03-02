
let cardPossibilities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

module.exports = function deckOfCards() {
  let cards = [];

  for ( let i=1; i<=4; i++ ) {
    cards = cards.concat(cardPossibilities);
  }

  let randomNumber = Math.floor( Math.random() * 52 );
  // console.log(randomNumber); //tells me the position within the cardPossibilities array
  // console.log(cards[randomNumber]); //prints out this random number


  return cards;
};

//allowed me to see the deck creation process
// let myDeck = deckOfCards();
// console.log(myDeck); //spits out the whole deck of cards
