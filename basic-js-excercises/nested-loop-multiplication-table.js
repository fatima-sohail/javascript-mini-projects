//Write a nested loop that generates a multiplication table from 1 to 5.
/*
printed: 
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25
*/
for(let i = 1; i <=5; i++){
    let product = 1;
    let row = ''
    for(let j=1; j <=10; j++){
        product = i*j
        // row = row + '[' + i + ',' + j + '] ';
        row = row + product + ' '
    }
    console.log(row)
      
}