import readlineSync = require('readline-sync');

let nComputer: number = Math.ceil(Math.random() * 100);


let nGuess: number = -1;

while(nGuess != nComputer){
    nGuess = Number(readlineSync.question('enter a number between 1 and 100 > '));
    if(nGuess > nComputer){
        console.log("too high");
    }else if(nGuess < nComputer){
        console.log("too low");
    }else{
        console.log("right on eh?");
    }
}