groceries = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
// returns 'Carrots, Hummus, Pesto and Rigatoni'
// console.log(groceries)

let result = ''
for (let i = 0; i < groceries.length; i++) {
    result = result + groceries[i]['item']
}
console.log(result)

const frontToBack = (groceries) => {
    let result = ''

    let lastIndex = groceries.length-1;
    let secondLast = lastIndex-1;

    for (let i = 0; i < groceries.length; i++) {
        // result = result + groceries[i]['item']
        let fruit = groceries[i].item
        result = result + fruit
        if(i !== lastIndex && i !== secondLast) {
            result = result + ', '
        } else if(i === secondLast) {
            result = result + ' and '
        }
    }

    return result;
}

console.log(frontToBack(groceries))

// const backToFront = () => {
//     let reult = ''
// }