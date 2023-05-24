//Task1:Array Joining (String) Write a function that takes an array of strings as input 
//and returns individual characters of the string with a space in between.

function joiningWords(arr){
    //const newWord = arr.split("")
    const newWord2 = arr.join("")  
                            
    const result1 = newWord2.split("")
    const result2 = result1.join(" ")
    return result2;

}


test1 = ["soup", "tomato"]

//Task2: Write a function that takes an array of strings as input and 
//returns a single string by joining all the elements of the array with a space in between.

console.log(joiningWords(test1)) //soup tomato

function joinString(arr){
    const newWord = arr.join(" ") // (""): no space, printed: souptomato 
                                 // ("-"): printed: soup-tomato
                                //(","): printed: soup,tomato
                                //("+"): printed: soup+tomato
                                // (): printed: soup, tomato
    return newWord
}
console.log(joinString(test1))  //prints: soup tomato