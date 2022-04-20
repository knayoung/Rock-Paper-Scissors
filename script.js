// computerPlay will be a function that returns Rock, Paper or Scissors
// I will create an array containing these three options for which 
// the CPU will choose from



function computerPlay() {

const cpuSelection =  ['rock', 'paper', 'scissors'];

var randomSelection = cpuSelection[Math.floor(Math.random() * cpuSelection.length)];

console.log(randomSelection)


}




function casing (playerSelection) {

    
    let lowerC = playerSelection.toLowerCase();

    console.log(lowerC)
    }
    



//