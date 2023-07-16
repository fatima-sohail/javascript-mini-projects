//naive approach vs 3 step approach
//setup, exercise and varify steps in test functions

const assert = require('assert');

// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(['padawan', 'knight'].pop() === 'knight'); 
  });
});
//run npm test in terminal, it will pass

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});
//run npm test in terminal, it will pass
