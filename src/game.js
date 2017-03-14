

//this connects the function created in deck.js to this file
let buildDeck = require("./deck.js");

let cardPossibilities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

/**
 * This allows two players to play the game of war and it logs out the winner.
 * @param  {Array} players This has to be two strings
 * @return {void}          If there are more than two players it returns error
 */
module.exports = function warGame(players) {
  //this establishes that two players must be inserted in the argument when the fn is returned
  if (arguments.length < 1) {
    return 'error';
  }
  if (players.length !== 2) {
    return 'error';
  }

  //this gives a variable to the function established in the deck.js file
  let card = buildDeck();

  //these establish default vaules for the game, so they can be altered in the following for loop
  let numberOfWinsForPlayerOne = 0;
  let numberOfWinsForPlayerTwo = 0;
  let numberOfTies = 0;


  // compare the two cards and see who wins
  for (let i=0; i<=51; i+=2) {
    console.log( card[i], card[i+1] );

    // discerns who won the game based on the index "value" of each card in the deck
    if ( cardPossibilities.indexOf(card[i]) > cardPossibilities.indexOf(card[i+1]) ){
      numberOfWinsForPlayerOne++;
    } else if ( cardPossibilities.indexOf(card[i]) < cardPossibilities.indexOf(card[i+1]) ){
      numberOfWinsForPlayerTwo++;
    } else if ( cardPossibilities.indexOf(card[i]) === cardPossibilities.indexOf(card[i+1]) ) {
      numberOfTies++;
    }
  }

  //creates time game was played in proper format
  let now = new Date();
  let date = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
  let time = now.getHours() + ':' + now.getMinutes();

  //this creates the desired format for the results of the war game
  let warResults = {
   gamePlayTime: date + ' at ' + time,
   players: [
     {name: players[0], numberOfWins: numberOfWinsForPlayerOne, winRatio: numberOfWinsForPlayerOne/26},
     {name: players[1], numberOfWins: numberOfWinsForPlayerTwo, winRatio: numberOfWinsForPlayerTwo/26}
   ],
   ties: numberOfTies,
  }

  // console.log(warResults);
  return warResults;
};

module.exports(['John', 'Jerry']);
