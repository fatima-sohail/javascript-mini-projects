//Create a program that generates a random number between 1 and 100, 
//then asks the user to guess the number. Provide 
//"higher" or "lower" hints until they guess correctly.

//generate a random num btw 1 and 100

//imports which enable user inputs
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query){
    return new Promise(resolve => rl.question(query, resolve));
}

async function guessTheNum(){
    let min = 1;
    let max = 100;
    //correct number
   let numInRange =  Math.floor(Math.random() * (max-min) + min); 

   console.log(numInRange);
    
   let guess = false;
   
   while(guess == false){
    let userInput = await askQuestion("Guess the number: ")
    if(userInput == numInRange){
        console.log("you guessed the correct number")
        guess = true
    }else if(userInput < numInRange){
        console.log("The expected number is higher");
    }else{
        console.log("The expected number is lower");
    }
    
   }
   rl.close();
}

guessTheNum();
