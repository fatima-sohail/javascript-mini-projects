//Using catch() with Promises
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:

checkInventory(order)
.then(handleSuccess).catch(handleFailure)
//prints: We're sorry. Your order could not be completed because some items are sold out.
