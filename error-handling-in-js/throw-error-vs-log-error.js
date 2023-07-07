//log error
//this error wont stop code from working

//Error is a function that takes a string as parameter
console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

//new is a keyword, both the functions have same outcome
console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.


/********************************************************************/

//throw error
//this will stop the program from running, e.g all red lines in output in the console

//'throw' keyword is the trick
throw Error('Username or password does not match')
//doesn't print anything, throws error, all red lines no code
