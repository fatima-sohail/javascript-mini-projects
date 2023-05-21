//Task 1: Write a function that takes an array of numbers and a target number as input 
//and returns true if the target number is present in the array, and false otherwise.

function findNumPresentInTheArray(arr, tarNum){
   for(let i = 0; i<arr.length; i++){ // increments, checks and execute the body - True for all the iterations except 1st and last:
    if(arr[i] === tarNum){
        return true
    }
   }
   return false
}

test1 = [77,33, 23, 67, 32]

console.log(findNumPresentInTheArray(test1, 0))

console.log("----------------------------")

//Task2: write a function that takes in array of num and a target num as input 
//and returns the count how many times the target number appears in the array

function countTarNum(arr2, tarNum2){
    let count = 0
    for(let i = 0; i<arr2.length; i++){
        if(arr2[i] == tarNum2){
             count++    //count starts at 0 and increments with every 4 that is found on the way till the array ends
        }
    }
    return count
}

test2 = [3, 2, 3, 4, 4, 5, 6, 4, 8] // 4 => 3
console.log(countTarNum(test2, 4))

console.log("--------------------------------")

//task3: write a function that takes in an array of numbers
//and return true if there are more even numbers in the list than there are odd numbers

//Mapping of requirement to coding construct:
//need to go through each item in the array - loop
//need to count even nums - conditions and varaible that represents num of times even nums appear
//and odd nums - conditions and varaible that represents num of times odd nums appear
//if even num count > odd nums count, return true

function checkIfEvenNumsAreMoreThanOddNumArray(arr){
    let evenCount = 0
    let oddCount = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            evenCount++
        }else if(arr[i]%2 == 1){
            oddCount++
        }
    }
    if(evenCount>oddCount){
        return true
    }
    return false
}

console.log(checkIfEvenNumsAreMoreThanOddNumArray(test2))

test3 = [2,1,3,5,7,8,9,7,7,7]
console.log(checkIfEvenNumsAreMoreThanOddNumArray(test3))


test4 = [2,3,4,5,6,7,8,9,0,0,0,0,1,2,3,4,5,6,7,8,9,0]
console.log(checkIfEvenNumsAreMoreThanOddNumArray(test3))

console.log("-----------------------------")

//Task 4: write a function that takes in 2 list of unique nums and 
// returns a list of common nums

// arr1:[34, 22, 8, 6, 3], arr2:[3, 22, 77, 9] => [3, 22]
// arr1: [7, 9, 0, 1] arr2:[9, 0] => [9,0]

//go through each item in both the arrays - loop
//find out common nums among them
//return the common num

function findCommonNums (arr1, arr2){
    let resultArr= []
    for(let i =0; i<arr1.length; i++){ //for 34 in arr1, go through each item in arr2
                                              //for 22 in arr1, go through each item in arr2
                                              //so it becomes loop with in loop/nested loop
        for (let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                resultArr.push(arr1[i])
            }
        }
    }
    return resultArr
}

testarr1 = [34, 22, 8, 6, 3]
testarr2 = [3, 22, 77, 9]
console.log(findCommonNums(testarr1, testarr2))