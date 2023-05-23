//6. Write a JavaScript program that generates a random number between 1 and 100.
function randomNum(){
    //let num = Math.floor(Math.random()*100) //gives num from 0 to 99(exclusive)
        num = Math.floor(Math.random()*100) + 1 //gives num from 1 to 100(inclusive)
    return num
}
console.log(randomNum())

console.log("------------------------------------")

//Method 2

let randomNumber = Math.random() //this will only give random num between 0(inclusive) and 1(exclusive)
    random = Math.random() * 100 + 1 //Q??this will give random num between 0 and 100(exclusive or inclusive?)
    console.log(random)

    console.log("------------------------------------")
//Method 3
function randomNUmRange(min, max){
let number = Math.floor(Math.random() * (max-min+1)) + min
return number
}
console.log(randomNUmRange(1, 100)) //Q?? is 1 and 100 inclusive?