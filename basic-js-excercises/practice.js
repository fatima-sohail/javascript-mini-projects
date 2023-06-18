// function sumOfArr (arr){
    //let N = arr.length; //tells the number of elements in the array
    // let sum = 0
//     for(let i = 0; i <= N-1; i++){
//         sum = sum + [i]
    
//     }
//     return sum

// }



// function sumArrayEven(arr){
//     for(let i = 0; i < arr.length-1; i++){
//         if(arr[i]%2 == 0){
//             sum = sum + arr[i]
//         }
        
//     }
//     return sum
// }
// test1 = [1,2,3,4]
// console.log(sumArrayEven(test1));

//task 1. Write a function that takes an array of numbers as input and returns a new array with only the 
//even numbers from the original array.

// function evenNumArray(arr){
//     return arr.filter((arrElement)=>
//     arrElement%2==0
//     )
// }
// test1 = [1,2,3,4]
// console.log(evenNumArray(test1))

// 


function joiningWords(arr){
    const joinArr =  ((arr.join(" ")).split('')).join("- ")
    return joinArr
   
    
    
    
}


test1 = ["soup", "tomato"]
console.log(joiningWords(test1))