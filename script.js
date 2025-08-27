//console.log('hello wrld'); //The console works muhuhaha!

function getComputerChoice (min, max){ 
    const options = ['rock' , 'paper' , 'scissors']
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return options[Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)];
}
console.log(getComputerChoice(0,3));
console.log(getComputerChoice(0,3));
console.log(getComputerChoice(0,3));
function getHumanChoice (){
    
}