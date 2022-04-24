// computerPlay will be a function that returns Rock, Paper or Scissors
// I will create an array containing these three options for which 
// the CPU will choose from





// rock paper
// rock scissors
// paper scissors
// paper rock
// scissors rock
 



let cpuScore = 0;
let myScore = 0;

function computerPlay() {

    let cpuSelection =  ["rock", "paper", "scissors"];
    
    let randomSelection = cpuSelection[Math.floor(Math.random() * cpuSelection.length)];

    return randomSelection;
    
    
    }



    function playRound() {


let playerSelection = prompt("Please enter rock paper or scissors");
let computerSelection = computerPlay();


    if (playerSelection == "rock" && computerSelection =="paper") {
        cpuScore++;
      let result = "You lose! Paper beats Rock";
      result += '\n'
      result += "Your Score: " + myScore
      result += '\n'
      result += "Computer Score: " + cpuScore
      return result;
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        myScore++;
        let result = "You win! Paper beats Rock";
        result += '\n'
        result += "Your Score: " + myScore
        result += "Computer Score: " + cpuScore
        return result;
      }

      else if (playerSelection == "scissors" && computerSelection == "rock") {
        cpuScore++;
        let result = "You lose! Rock beats Scissors";
        result += '\n'
        result += "Your Score: " + myScore
        result += "Computer Score: " + cpuScore
        return result;
      }

      else if (playerSelection == "rock" && computerSelection == "scissors") {
        myScore++;
        let result = "You win! Rock beats Scissors";
        result += '\n'
        result += "Your Score: " + myScore
        result += "Computer Score: " + cpuScore
        return result;
        
      }

      else if (playerSelection == "paper" && computerSelection == "scissors") {
        cpuScore++;
        let result = "You lose! Scissors beats Paper";
        result += '\n'
        result += "Your Score: " + myScore
        result += "Computer Score: " + cpuScore
        return result;
        
        
      }

      else if (playerSelection == "paper" && computerSelection == "scissors") {
        myScore++;
        let result = "You win! Paper beats Scissors";
        result += '\n'
        result += "Your Score: " + myScore
        result += "Computer Score: " + cpuScore
        return result;
      }

      else {
        let result =  "Tie! Please try again";
        result += '\n'
        result += " Your Score: " + myScore
        result += '\n'
        result += " Computer Score: " + cpuScore
        return result;
      }

}

function endGame() {

    if (myScore > cpuScore) {

        console.log ("Game over, you win!");
    }

    else if (cpuScore > myScore) {
        console.log ("Game over, you lose!")
    }
}

function game() {

    console.log(playRound());
    if(myScore < 5 && cpuScore < 5) {
        game();
    }
    else {
        endGame();
    }
}

game();
   











 
    






    



//