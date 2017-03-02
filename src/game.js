
let buildDeck = require("./deck.js");

module.exports = function warGame(players) {
  if (arguments.length < 1) {
    return 'error';
  }

  if (players.length !== 2) {
    return 'error';
  }

  let card = buildDeck();

  // I believe this is the path to use to get the deck to register strings as numbers
  // let Jack = 'J';
  // console.log( Number(Jack) === 10 );


  // compare the two cards and see who wins
  for (let i=0; i<=51; i+=2) {
    console.log( card[i], card[i+1] );

    // log out who won the hand ("player 1 won", or "tied")
    if ( card[i] > card[i+1] ){
      let playerOne = 'player 1 won';
      console.log(playerOne);
    } else if ( card[i] < card[i+1] ){
      let playerTwo = 'player 2 won';
      console.log(playerTwo);
    } else if (card[i] === card[i+1]) {
      let bothPlayers = 'tied';
      console.log(bothPlayers);
    }
  }

  // counter to keep track of wins/losses

  // return warResults;
};

warGame();
