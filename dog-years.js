//converts human age to dog years

var myAge = 3;
var earlyYears = 2;
earlyYears *=10.5;

var laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
var myAgeInDogYears = earlyYears + laterYears;

//returns my name in lowercase letters
var myName = 'Fatima'.toLowerCase();

//logs my human age in dog years
console.log(`My name is ${myName}. I am ${myAge} years 
old in human years which is ${myAgeInDogYears} years old in dog years.
`)

