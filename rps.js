function rockPaperScissors(player1, player2) {
  // Ways that a Player can win using an object definition assigned with a key 
  const wins = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  // Output if Players Draw
  if (player1 === player2) {
    return "draw";
  } 
  
  // Ways Player 1 can win using the key
  else if (wins[player1].includes(player2)) {
    return "player1";
  } 
  // If the above statements are not found true:
  else {
    return "player2";
  }
}

// Input of Player's choices for the function
console.log(rockPaperScissors("lizard", "rock"));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}