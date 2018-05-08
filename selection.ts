import readlineSync = require('readline-sync');

let score: number = Number(readlineSync.question('What was your score on the test? '));
if(score >= 55){
  console.log("You Passed");
}else{
  console.log("You failed");
}