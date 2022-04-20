// computerPlay will be a function that returns Rock, Paper or Scissors
// I will create an array containing these three options for which 
// the CPU will choose from



function computerPlay() {

const cpuSelection =  ['rock', 'paper', 'scissors'];

var randomSelection = cpuSelection[Math.floor(Math.random() * cpuSelection.length)];

console.log(randomSelection)


}

 
function playRound(playerSelection, computerSelection) {

     let lowerC = playerSelection.toLowerCase();

     if (lowerC === "rock" && computerSelection === "paper")
     {
      return "You Lose! Paper beats Rock";
     }
   console.log(playRound(playerSelection, computerSelection));
}





    



//