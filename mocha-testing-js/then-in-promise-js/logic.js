//Success and Failure Callback Functions

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

//success handler
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue)
}

//failure handler
const handleFailure = (failedToResolveValue) => {
  console.log(failedToResolveValue)
}

//invoke checkInventory() with order
checkInventory(order)
.then(handleSuccess, handleFailure)

//
