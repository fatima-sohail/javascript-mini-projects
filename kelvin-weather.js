// 
// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout

// });

var temperature = 'enter temperature in kelvin\n>'

// rl.question(temperature, (userinput)=>{

//     var celsius = userinput - 273;
//     var fahrenheit = celsius * (9/5) + 32;
//     fahrenheit = Math.floor(fahrenheit);
//     console.log('The temperature is ' +  celsius + ' degrees celsius.');
//     console.log('The temperature is ' +  fahrenheit + ' degrees Fahrenheit.');

//     var newton = celsius * (33/100);
//     newton = Math.floor(newton);
//     console.log('The temperature is ' +  newton + ' degrees newton.');

//     rl.exit()
// })
var userinput = 100
var celsius = userinput - 273;
var fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' +  celsius + ' degrees celsius.');
console.log('The temperature is ' +  fahrenheit + ' degrees Fahrenheit.');

var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log('The temperature is ' +  newton + ' degrees newton.');


// function converter(temp) {
    
// }




