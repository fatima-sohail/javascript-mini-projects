
// prints string 10 times
let str = "hello"
for(let i = 1; i < 10; i++){
    console.log(str)
}
console.log("**************")
for(let i = 0; i < 15; i++){
    console.log(i + " - " + str)
}


console.log("**************")
// print " i - hello" for all even numbers from 1 to 15 
for(let i = 0; i < 15; i++){
if(i%2 == 0){
    console.log(i + " - " + str)
}
}