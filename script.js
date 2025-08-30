//console.log('hello wrld'); //The console works muhuhaha!

let humanScore = 0;
let computerScore = 0;

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
    return `It's a tie! You both chose ${humanSelection}. Current score: You ${humanScore} Computer ${computerScore}`;
  }
  if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `You win! ${humanSelection} beats ${computerSelection}. Current socre: You ${humanScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${humanSelection}. Current score: You ${humanScore} - Computer ${computerScore}`;
  }
} 
console.log(playRound())

 