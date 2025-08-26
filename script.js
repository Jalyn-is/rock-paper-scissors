//console.log('hello wrld'); //The console works muhuhaha!

function getComputerChoice (min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
console.log(getComputerChoice(1,4));