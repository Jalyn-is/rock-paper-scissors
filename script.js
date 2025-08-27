//console.log('hello wrld'); //The console works muhuhaha!

const humanScore = 0;
const computerScore =0;

function getComputerChoice (min, max){ 
    const options = ['rock' , 'paper' , 'scissors']
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return options[Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)];
}
function getHumanChoice (){
    const humanChoice = prompt('rock paper scissors?').toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice
    } else {
        return('Invalid input')
    }
}


