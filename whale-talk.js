//Rules translating text to whale language:
//1. There are no consonants. Only vowels excluding “y”.
//2. The u‘s and e‘s are extra long, so we must double them in our program.
var input = 'I am doing JavaScript';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = []

for(let i = 0; i < input.length; i++){
  //console.log(i);
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
  for(let j = 0; j < vowels.length; j++){
  //console.log(j);
  if(input[i] === vowels[j]){
  //console.log(input[i]);
  resultArray.push(input[i]); 
  }
}
}
   //console.log(resultArray);
   let resultString = resultArray.join('').toUpperCase();
   console.log(resultString);
//console.log(resultString.toUpperCase());