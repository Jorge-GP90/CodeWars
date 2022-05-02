/*

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/

const rps = (p1, p2) => {
  let winner;
  switch (p1) {
    case "scissors":
      p2 === "scissors"
        ? (winner = "Draw")
        : p2 === "paper"
        ? (winner = "Player 1 won")
        : p2 === "rock"
        ? (winner = "Player 2 won")
        : (winner = "not valid input 1");
      break;
    case "rock":
      p2 === "scissors"
        ? (winner = "Player 1 won")
        : p2 === "paper"
        ? (winner = "Player 2 won")
        : p2 === "rock"
        ? (winner = "Draw")
        : (winner = "not valid input 2");
      break;
    case "paper":
      p2 == "scissors"
        ? (winner = "Player 2 won")
        : p2 == "paper"
        ? (winner = "Draw")
        : p2 == "rock"
        ? (winner = "Player 1 won")
        : (winner = "not valid input 3");
      break;
  }
  return winner;
};

console.log(rps("paper", "rock"));

// Second solution
const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// third solution
const rps3 = (p1, p2) => {
  var map = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 == p2) {
    return "Draw!";
  } else {
    return "Player " + (map[p1] == p2 ? 1 : 2) + " won!";
  }
};
