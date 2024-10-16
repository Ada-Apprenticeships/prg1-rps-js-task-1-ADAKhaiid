function rockPaperScissors(player1, player2) {
  // Both a
  if (player1 == player2) {
    return "draw"
  } 
  
  // Player 1 Wins Scenarios

  if (player1 == "paper" && player2 == "rock") {
    return "player1"
  }

  else if (player1 == "rock" && player2 == "scissors" )  { 
    return "player1"
  }
  
  else if (player1 == "scissors" && player2 == "paper") {
    return "player1"
  }

  else if (player1 == "paper" && player2 == "spock") {
      return "player1"
    }

  else if (player1 == "rock" && player2 == "lizard") {
      return "player1"
    }

  else if (player1 == "scissors" && player2 == "lizard") {
      return "player1"
    }

  else if (player1 == "spock" && player2 == "scissors") {
      return "player1"
    }

  else if (player1 == "spock" && player2 == "rock") {
      return "player1"
    }

  else if (player1 == "lizard" && player2 == "spock") {
      return "player1"
    }

  else if (player1 == "lizard" && player2 == "paper") {
      return "player1"
    }

  else if (player1 == "paper" && player2 == "spock") {
      return "player1"
    }

  else if (player1 == "rock" && player2 == "lizard") {
      return "player1"
    }


  // If the above statements are not found true:
  return "player2"
}

console.log(rockPaperScissors("lizard","rock"))

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}