//4. Write a JavaScript program that checks if a given number is even or odd.
function oddOrEvenNum (num){
    
    if(num%2 == 0){
       console.log(num + " is even")
    }else if (num%2 ==1){
        console.log(num + " is odd")
    }
}

oddOrEvenNum(7)
oddOrEvenNum(21)
oddOrEvenNum(10)