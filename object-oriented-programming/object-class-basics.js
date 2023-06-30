//create a fruit class with type and color
class Fruit {
    constructor(type, color){
        this._type = type;
        this._color = color;
    }

    get type(){
        return this._type;
    }

    get color(){
        return this._color;
    }

    changeColor(color){
        this._color = color;
    }
}

//create instance of the Fruit class
//create apple and banna 
const apple1 = new Fruit('apple', 'green');
const cherry1 = new Fruit('cherry', 'red');
const orange1 = new Fruit('orange', 'orange');

//put them in a list called fruitBasket
let fruitBasket = [apple1, cherry1, orange1];

//print they types of all fruits
for(let i=0; i<fruitBasket.length; i++){
    console.log(fruitBasket[i].type)
}
//prints: apple cherry orange

//print types using forEach()
fruitBasket.forEach((fruit)=>{
    console.log(fruit.type);
}
)
//prints: apple cherry orange 

//print color of each fruit
fruitBasket.forEach((fruit)=>{
    console.log(fruit.color)
}
)
//prints: green red orange

//change the apple's color to blue
 apple1.changeColor('blue');
console.log(apple1);

//print the updated colors
fruitBasket.forEach((fruit)=>{
    console.log(fruit.color)
}
)