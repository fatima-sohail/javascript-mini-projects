//Write a JavaScript program that prints the numbers from 1 to 10.

for(let i = 1; i <= 10; i++){
    console.log(i)
}

//for isolation of output
console.log("--------------------------------------")

let k = 1;
while (k <= 10){
   console.log(k)
   k++
};
console.log("--------------------------------------")


// sum from 1 to 10
let sum = 0;
for(let i = 1; i<= 10; i++){
    sum = sum + i;
}
console.log(sum)
console.log("--------------------------------------")
//print every 4th num from 20 to 40
for(let i=20; i<=40; i = i + 4){
    console.log(i)
}

console.log("--------------------------------------")

let i = 20;
while(i<=40){
    console.log(i)
    i = i + 4
}
console.log("--------------------------------------")
//print all multiples of 6 btween 17 and 43
for(let i = 17; i <=43; i++){
    let remainder = i%6
    if(remainder == 0){
        console.log(i)
    }
}
console.log("--------------------------------------")
//multiples of 3 in reverse order from 86 to 66
for(let i = 86; i >= 66; i--){
    if(i%3 == 0){
        console.log(i)
    }
}
console.log("--------------------------------------")
//all the multiples of 4 and 5 between 31 and 57
for(let i =31; i <= 57; i++){
    if(i%4 == 0 && i%5 ==0){
        console.log(i)
    }
}
console.log("--------------------------------------")
//all the multiples of 4 and 5 between 1 and 100
for(let i =1; i <= 100; i++){
    if(i%4 == 0 && i%5 ==0){
        console.log(i)
    }
}
console.log("--------------------------------------")
//print every 3rd num from 8 till 31 inclusive
for(let i = 8; i <=31; i = i+3){
    console.log(i)
}
console.log("--------------------------------------")
