/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.




*/

// Fisrt solution way

const array = [4, 3, 9, 7, 2, 1];

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    Number.isInteger(Math.sqrt(array[i]))
      ? (array[i] = Math.sqrt(array[i]))
      : (array[i] **= 2);
  }

  return array;
}

console.log(squareOrSquareRoot(array));

// Second Solution

function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}
// third Solution

function squareOrSquareRoot(array) {
  return array.map((x) => {
    const n = Math.sqrt(x);
    return Number.isInteger(n) ? n : x * x;
  });
}

// fourth solution
const squareOrSquareRoot = ($) =>
  $.map((el) => (el ** 0.5 % 1 ? el * el : el ** 0.5));
