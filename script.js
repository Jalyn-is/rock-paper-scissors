//console.log('hello wrld'); //The console works muhuhaha!

function getComputerChoice (min, max){ 
    const options = ['rock' , 'paper' , 'scissors']
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return options[Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)];
}
function getHumanChoice (){
   const choice = prompt('rock paper scissors?')
   return choice; 
}