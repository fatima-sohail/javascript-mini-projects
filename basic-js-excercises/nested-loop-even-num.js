// Write a nested loop that generates a pattern of even numbers up to 10.

for(let i = 0; i<=10; i++){
    // let evenNum = 0
    let row = ''
    for(j = 0; j<=10; j = j+2){
        row = row + j + ' ' 
    }
    console.log(row);
}