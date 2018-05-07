import readlineSync = require('readline-sync');

console.log("Welcome");
let userName: string = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
