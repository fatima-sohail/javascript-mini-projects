//map is used to transform an array into a new one with modified values e.g converting array of number into array of their squares or 
//converting array of string into array of their lengths
//Task 1:Array Mapping Write a function that takes an array of names as 
//input and returns a new array with all the names capitalized.

function capitalNames(array){
    const mapNames = array.map((element)=> //no curly braces here!!
        element.toUpperCase()
    )
    return mapNames
}

TestArr1 = ['a', 'b', 'c']
console.log(capitalNames(TestArr1))

console.log('-------------------------------')

//Task2: (Multiplication) Write a function that takes an array of numbers as input 
//and returns a new array with each number multiplied by 2.

function arrMultipliedBy2(arr){
    const mapNumber = arr.map((element) => 
    element*2
    )
    return mapNumber;
}

testArr2 = [2,3,4];
testArr3 = [5,8,0,7,3,1,5,5,0] 

console.log(arrMultipliedBy2(testArr2));

