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

//create apple and banana child classes
class Apple extends Fruit{
    constructor(seeds){
        super('apple', 'green')
        this._numOfSeeds = seeds;

    }
    get numOfSeeds (){
        return this._numOfSeeds;
    }
}

//create a bunch of apples
const apple1 = new Apple(3);
console.log(apple1) //prints: Apple { _type: 'apple', _color: 'green', _numOfSeeds: 3 }

const apple2 = new Apple(4);
console.log(apple2); //prints: Apple { _type: 'apple', _color: 'green', _numOfSeeds: 4 }

const apple3 = new Apple(5);
console.log(apple3); //prints: Apple { _type: 'apple', _color: 'green', _numOfSeeds: 5 }

//change the color of apple2
apple2.changeColor('pink');
// console.log(apple2); 
//prints: Apple { _type: 'apple', _color: 'pink', _numOfSeeds: 3 }

//put them in the list and print
const fruitBasket = [apple1, apple2, apple3]
console.log(fruitBasket);