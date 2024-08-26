//create an array of your favorite foods. Write a function that randomly returns
// one of these foods.

//array = fav foods
//function array(){ 
// return random fav foods}

let foodArray = ["Egg", "Dates", "beef", "chickpea"];
function randomFood (foodArray){
    let maxIndex = foodArray.length-1;
    let randomIndex = Math.floor(Math.random() * maxIndex);
    return foodArray[randomIndex];
    
}

console.log(randomFood(foodArray));

