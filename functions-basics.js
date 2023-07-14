
// const num1 = () => {
//     return 1
// }

// const num2 = () => {
//     console.log(1)
// }

// let returned_value = num1()
// console.log(returned_value + " was returned from num1")
// // num2()

var countSheep = function (num){
    //your code here
    let result = ""
    for(let i = 1; i <= num; i++){
      result += (i + ' sheep...');
    }
    return result
}

// // console.log(countSheep(4))
// let lower = 0;
// let upper = Math.random()*10;
// let upperBound = Math.floor(upper)
// console.log(upperBound)

const randomNumber = () => {
    let upper = Math.random()*10;
    let upperBound = Math.floor(upper)
    return upperBound
}

//create a loop which will run 20 times at max and generate a random num at each iteration, however
//if the num is 7 we return, loop has to be within another function
const num = () => {
    for(let i = 0; i < 20; i++){
        let temp = randomNumber()
        console.log("["+i + "] "+temp)
    }
}
// num()
// console.log("[" + 2 + "]")

const num3 = () => {
    for(let i = 0; i < 20; i++){
        let temp = randomNumber()
        console.log("["+i + "] "+temp)
        if(temp == 7) {
            return
            //break; 
        }
    }
    console.log("This text")
}

let sevenAt = num3()
console.log(sevenAt)