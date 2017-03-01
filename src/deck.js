
let cardPossibilities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];



function deckOfCards() {
  // let cards = [];


  let randomNumber = Math.floor( Math.random() * 13 );
  console.log(randomNumber);
  console.log(cardPossibilities[randomNumber]);


  // return cards;
}

deckOfCards();
deckOfCards();
