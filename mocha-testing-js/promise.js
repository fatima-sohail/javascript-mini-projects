 
  

  console.log("This is the first line of code in app.js.");
  // Keep the line above as the first line of code
  // Write your code here:
  const usingSTO = ()=> {
    console.log('we are alive and we will thrive')
  }
  
  setTimeout(usingSTO, 2000)

  // Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

//prints: This is the first line of code in app.js.
        //This is the last line of code in app.js.
        //we are alive and we will thrive

  
//****************************************************************************************

  let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
   
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
   
  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };
   
  prom.then(handleSuccess, handleFailure);
  
  //prints both statments randomly: ohh noo
  //prints: Yay! 
  
  //**************************************************************** */

  

