//Write a function that takes a string as an argument 
//and returns the reverse of that string.

//function (a string){
// return reverse of that string}



function reverseString (input){
    let output = '';
    //loop
    //for i starts from 0, i is less than input length, i++
    //reverse the loop
    for(let i= input.length -1; i>=0; i--){
        output = output + input[i];
        //return output;
    }
    return output;
}

 reverseString("Fox");
 console.log(reverseString("Fox"));