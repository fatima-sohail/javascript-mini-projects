//Write a JavaScript function that takes a string as input and returns the string in reverse order.
//e.g "hello" -> "olleh"
//Method 1
//using .split(), reverse() and .join()method
function reverseStrng (str){
 //.split("") not .split() will converts string into array in such a way that each item in the string becomes individual elements in the array,
 //"hello" to ['h', 'e', 'l', 'l', 'o']
  let arry1 = str.split("") 
    // arry1 = "hello".split("")
    // console.log(arry1) //prints: 

    //.reverse() method reverses ['h', 'e', 'l', 'l', 'o'] to ['o', 'l','l', 'e', 'h']
    let arry2 = arry1.reverse();

    //.join("") method joins all the elements of array together into a string - olleh
    let arry3 = arry2.join("");

    return arry3 
}

console.log(reverseStrng('hello')) 

console.log('----------------------------------')

//Method 2
//joining all the above methods
function reverseStrng2(strng2){
    return strng2.split("").reverse().join("")

}

console.log(reverseStrng2('hello'))

console.log('----------------------------------')

//Method 3 - forloop

//Method 4 - recursion

