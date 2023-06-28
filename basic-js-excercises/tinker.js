function meow() {
    console.log("m");
    // console.log("meow meow");
    cawcaw()
    console.log("n");
}

function cawcaw() {
    console.log('Caw caw caw');
}

function woof() {
    console.log("a");
    meow()
    console.log("b");
    console.log("Woof woof");
}


woof()
