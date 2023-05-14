//Write a JavaScript function that takes an array of numbers as input
// and returns the sum of all the numbers in the array.
//param-[x,y]
//sum = [x+y]

function sumOfArr (arr){
    let N = arr.length; //tells the number of elements in the array
    let sum = 0
    for(let i = 0; i <= N-1; i++){
        sum = sum + arr[i]
    
    }
    return sum

}

let test1 = [2,3,4,5];
let test2 = [5,6,7]
console.log(sumOfArr(test1))


console.log("-----------------------------------------")

function sumOfArr2 (arr){
    let sum = 0;
    arr.forEach((x) => {
        sum = sum + x
    })
    return sum;
}

console.log(sumOfArr2(test1))
console.log("-----------------------------------------")
//sum of all even numbers in the list

function evenNum(arr){
    let N = arr.length
    let sum = 0
    for(let i = 0; i<= N-1; i++){
        if(arr[i]%2 ==0){ //represents element at index [i], checking if element at index [i] is odd
            sum = sum + arr[i]
        }
    }

    return sum
}
console.log(evenNum(test1))
console.log(evenNum(test2))

console.log("-----------------------------------------")
//product of all odd indexed values from the list

function oddIndexArr(arr){
    let N = arr.length
    let product = 1
    for(let i = 0; i <= N-1; i++){
        if(i%2 ==1){ //represents index of an element, checking if an idex is odd
            product = product * arr[i]

        }
    }
    return product
}
console.log(oddIndexArr(test1))
console.log(oddIndexArr(test2))