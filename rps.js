function rockPaperScissors(player1, player2) {
  // Ways Players can win using Dictionary 
  const wins = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  // Players Draw
  if (player1 === player2) {
    return "draw";
  } 
  
  // Ways Player 1 wins using the dictionary and keys
  else if (wins[player1].includes(player2)) {
    return "player1";
  } 
  // If the above statements are not found true:
  else {
    return "player2";
  }
}

console.log(rockPaperScissors("lizard", "rock"));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}