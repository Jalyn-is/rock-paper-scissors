//console.log('hello wrld'); //The console works muhuhaha!

const humanScore = 0;
const computerScore =0;

function getComputerChoice (){ 
    const computerChoice = ['rock' , 'paper' , 'scissors']
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    return computerChoice[Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)];
}
function getHumanChoice (){
    const humanChoice = prompt('rock paper scissors?').toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice
    } else {
        return('Invalid input')
    }
}
function playRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
     if (humanSelection === computerSelection) {
    return `It's a tie! You both chose ${humanSelection}.`;
  }
  if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${humanSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${humanSelection}.`;
  }
}
console.log(playRound())

//getComputer choice will return undefined due to it not having the apprpriate parameters. Will fix later.