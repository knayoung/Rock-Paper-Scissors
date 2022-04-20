// computerPlay will be a function that returns Rock, Paper or Scissors
// I will create an array containing these three options for which 
// the CPU will choose from

function computerPlay() {

const cpuSelection =  ['Rock', 'Paper', 'Scissors'];

var randomSelection = cpuSelection[Math.floor(Math.random() * cpuSelection.length)];

console.log(randomSelection)


}