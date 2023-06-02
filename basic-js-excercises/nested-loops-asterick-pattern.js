//Task 1: Write a nested loop that prints a square pattern of asterisks (*) 
//with a side length of 4.
//print: * * * *
//       * * * *
//       * * * *
//       * * * *          


for (let i = 0; i < 4; i++) {
    let row = ' '
    for (let j = 0; j < 4; j++) {
        row = row + ' *'
    }
    console.log(row)
}

console.log('________________________________________________')


//Task 2: Create a nested loop that prints a right-angled triangle pattern of numbers from 1 to 5.
/*
           *
           **
           ***
           ****
           *****
*/
for (let i = 1; i <= 5; i++) {
    let rowStar = ''
    for (let j = 1; j <= i; j++) {
        rowStar = rowStar + '*'
    }
    console.log(rowStar)
}

console.log('________________________________________________')

//Task: create a nested loop that prints right angled triangles from 1 to 5 that has the same length
//and width 

for (let i = 1; i <= 5; i++) {
    let rowStar = ''
    for (let j = 1; j <= i; j++) { //5 columns for 5 rows, 6columns for 6 rows etc
        rowStar = rowStar + '*'
        console.log(rowStar);
    }
    //console.log(rowStar)
}