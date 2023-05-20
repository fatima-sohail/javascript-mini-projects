//Write a function that takes an array of numbers as input and 
//returns the sum of all the numbers using the array reduce() method.

function sumNum(arr1){
    //applying reduce() on generalized array - arr1

    //reduce takes in prevVal and value of current element as paras

    //total(2) to current val(4) in first iteration,
    // total now (6) adds to current val(7) in second iteration = 13
    //total now(13) + current val(4) in third iteration = 17 as so on 
    const reduceNum = arr1.reduce((total, currentValue)=> 
      total + currentValue
    )
    return reduceNum 
}
test2 = [2,4,7,4,3,0]
console.log(sumNum(test2))

console.log('------------------------------------')

//Debugging
function sumOfList(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

// test1 = [1,2,3]

// console.log(sumOfList(test1))
let result = sumOfList(test2)
console.log(result)

console.log('--------------------------')

//Task3: find average of test2 array // ???need to understand more

function averageOfNumArray(arr){
    const reduceNum = arr.reduce((bucket, apple, index, shelf)=> {
    bucket += apple
    if(index == shelf.length-1){ // put all apples in the bucket from the shelf
        return bucket/shelf.length
    } else {
        return bucket
    }
})
    return reduceNum
}
test2 = [2,4,7,4,3,0]
console.log(averageOfNumArray(test2))
