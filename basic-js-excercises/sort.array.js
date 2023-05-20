//Array Sorting Write a function that takes an array of numbers as input and 
//returns a new array with the numbers sorted in ascending order.

function numsInAscendingOrder(arr){
    //.sort() modifies original array, to avoid it, use .slice with it - source FreeCodeCamp
    //for ascending order, compare two values, subtract second value from first(a-b).
    //for descending order, reverse the subtraction(b-a)
 const slicedNum = arr.slice().sort((a,b)=> 
    a-b
 )
 return slicedNum
}

test1 = [1,6, 3, 5, 8, 2]
console.log(numsInAscendingOrder(test1))

console.log('-------------------------------------')
//task 3: Write a function that takes an array of string e.g['A', 'a', 'b'] as input and 
//returns a new array with strings sorted in ascending order

//the array is case sensitive-contains both capital and small letters
//in ascending order,small letters are smallest ['a', 'A', 'b'].
function ascendingOrderStr(arr){ //??Explain the process and convert ternary operator into long form
    const sortStrn = arr.sort((a,b)=> 
    a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
   return sortStrn;  
}

testArrStrng = ["A", "b", "B", "a"]
console.log(ascendingOrderStr(testArrStrng))