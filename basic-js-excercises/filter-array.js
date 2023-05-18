// task 1. Write a function that takes an array of numbers as input and returns a new array with only the 
//even numbers from the original array.

function evenNum(arr){
//applying filter to have only even numbers
 const filterNum = arr.filter((ElementOfArray) =>  //no curly brackets here!!
    ElementOfArray % 2 == 0 
    )
//return the variable which filters and gives even numbers
return filterNum;
}


test1 = [1,2,2,4,5,6]

console.log(evenNum(test1))

console.log("--------------------------------------------")

//Task 2. Array Filtering (Strings) Write a function that takes an array of strings as input and 
//returns a new array with only the strings that have a length greater than 5.
function strGreaterThan5 (arr){
   const filterStr =  arr.filter((str)=> 
    str.length>5  //don't need to return here, otherwise code after return does not execute??
 )
 return filterStr //return outside the filter method while staying inside the function
}

const nameArr = ["Shaggy", "tommy", "Leo", "SherKhan"]

console.log(strGreaterThan5(nameArr))