//JS-functions

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
      return userInput;
    } else {
      console.log('error');
    }
   }
   
   // getUserChoice('paper');
   // // console.log(getUserChoice('rock'));
   var getComputerChoice = () => {
     let randomNum = Math.floor(Math.random() * 3);
     switch (randomNum) {
     case 0:
     return 'rock';
     break;
     case 1:
     return 'paper';
     break;
     case 2:
     return 'scissors';
     break;
    default:
    console.log('Nothing is awarded.');
    break;
   
     }
   }
   
   // console.log(getComputerChoice());
   // console.log(getComputerChoice());
   // console.log(getComputerChoice());
   
   let determineWinner = (userChoice, computerChoice) => {
     
     //cheat code to win: 
     //if (userChoice === 'bomb'){
      //return 'You won!'
      //} 
      
     if (userChoice === computerChoice){
       return 'This game was a tie';
     }
     if (userChoice === 'rock') {
       if (computerChoice === 'paper'){
         return 'Computer won';
       } else {
         return 'You won';
       }
    }

       if (userChoice === 'paper'){
         if (computerChoice === 'scissors') {
           return 'The computer won';
         } else {
           return 'You won!'
         }
        }

         if (userChoice === 'scissors') {
           if (computerChoice === 'paper') {
             return 'You won!'
           }else {
             return 'The computer won'
           }
         }

         if (userChoice === 'scissors'){
           if (computerChoice === 'rock') {
              return 'The computer won'
           } else {
           return 'You won!'
         }
         }
       }
     
   
   // console.log(determineWinner('scissors', 'paper'))
   var playGame = () => {
     var userChoice = getUserChoice('rock');
    // var userChoice = getUserChoice('bomb');
   
     var computerChoice = getComputerChoice();
   
     console.log('You chose: ' + userChoice);
     console.log('Computer chose: ' + computerChoice);
   
   console.log(determineWinner(userChoice, computerChoice));
   }
   
   playGame(); /* you will always win because you are using 'bomb' */
   