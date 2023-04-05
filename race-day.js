//write a program that will register runners for the race and give them instructions on race day.
// 9:30 am -adult and registered ealry
//11:00 am- adult and registered late
//12:30 pm- all youth(below 18)

//to make this set of numbers range from 0(inclusive) to 1000(exclusive), we multiply returned 
//value by 1000
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let age = 17; //depending on the value of age, the output(time) in terminal changes i.e 19,20 

if (registeredEarly && age > 18) {
   raceNumber += 1000;
} 


if (registeredEarly && age > 18) {
  console.log(`Race starts at 9:30 am and your race number is: ${raceNumber}`);
} else if (!registeredEarly && age > 18){
  console.log(`Race starts at 11 am and your race number is: ${raceNumber}`);
} else if (age < 18) {
  console.log(`Race starts at 12:30 pm and your race number is: ${raceNumber}`)
}


