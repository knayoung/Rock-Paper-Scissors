// computerPlay will be a function that returns Rock, Paper or Scissors
// I will create an array containing these three options for which 
// the CPU will choose from



function computerPlay() {

const cpuSelection =  ["rock", "paper", "scissors"];

var randomSelection = cpuSelection[Math.floor(Math.random() * cpuSelection.length)];

console.log(randomSelection)


}

// rock paper
// rock scissors
// paper scissors
// paper rock
// scissors rock
 
function playRound(playerSelection, computerSelection) {

     let lowerC = playerSelection.toLowerCase();

     if (lowerC === "rock" && computerSelection === "paper")
     {
      return "You Lose! Paper beats Rock";
     }

     else if (lowerC === "paper" && computerSelection === "rock")
     {
      return "You Win! Paper beats Rock";
     }

     else if (lowerC === "paper" && computerSelection === "scissors")
     {
      return "You Lose! Scissors beats Paper";
     }

     else if (lowerC === "scissors" && computerSelection === "paper")
     {
      return "You Win! Scissors beats Paper";
     }

     else if (lowerC === "scissors" && computerSelection === "rock")
     {
      return "You Lose! Rock beats Scissors";
     }

     else if (lowerC === "rock" && computerSelection === "scissors")
     {
      return "You Win! Rock beats Scissors";
     }
     else {
         return "Tie! Please try again";
     }

    
   console.log(playRound(playerSelection, computerSelection))

    }






    



//