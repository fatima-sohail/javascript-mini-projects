var userName = '';
console.log(`Hello, ${userName}`);
let userQuestion = 'Is it going to rain today?'
console.log(userQuestion); 

/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
 In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) 
we can multiply the returned value by 1000.
Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
*/

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';

switch (randomNumber) {
  case 0:
  console.log('It is certain');
  break;
  case 1:
  console.log('It is decidedly so');
  break;
  case 2:
  console.log('Reply hazy try again');
  break;
  case 3:
  console.log('Cannot predict now');
  break;
  case 4:
  console.log('Do not count on it');
  break;
  case 5:
  console.log('My sources say no');
  break;
  case 6:
  console.log('Outlook not so good');
  break;
  case 7:
  console.log('Signs point to yes');
  break;
 default:
 console.log('invalid');
 break;
}
console.log(eightBall);
