//8. Write a JavaScript program that checks if a given string is a palindrome (a word or phrase that reads the same backward as forward).
//split the word into individual array items
function palindromeStrng(input){
let j = input.length - 1; //last index
let i = 0; //first index
while (i < j){
    if(input[i] != input[j]){
        return false
    }
    i++; //increment i while decrement j
    j--
}
return true
}

console.log(palindromeStrng('eye'))
console.log(palindromeStrng('circle'))
console.log(palindromeStrng('racecar'))