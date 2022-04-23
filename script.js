// computerPlay will be a function that returns Rock, Paper or Scissors
// I will create an array containing these three options for which 
// the CPU will choose from





// rock paper
// rock scissors
// paper scissors
// paper rock
// scissors rock
 
f
function computerPlay() {

    const cpuSelection =  ["rock", "paper", "scissors"];
    
    var randomSelection = cpuSelection[Math.floor(Math.random() * cpuSelection.length)];
    
    console.log(randomSelection)

    return randomSelection;
    
    
    }



    function playRound(playerSelection, computerSelection) {

   

    if (playerSelection == "rock" && computerSelection == "paper") {
      return "You lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
      }

      else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors";
      }

      else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
      }

      else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper";
      }

      else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You win! Paper beats Scissors";
      }

      else {
        return  "Tie! Please try again";
      }

}






const playerSelection = prompt("Please enter rock paper or scissors");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));





 
    






    



//