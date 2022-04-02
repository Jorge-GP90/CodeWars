/*
Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/

// First try
function invert(array) {
  let invert = [];
  if (array === []) return (array = []);
  for (const x of array) {
    invert.push(x * -1);
  }
  return invert;
}
console.log(invert([1, 2, 3, 4, 5]));

// Second way

function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}

//  third way

function invert(array) {
  return array.map((i) => 0 - i);
}

//  fourth way
const invert = (array) => array.map((num) => -num);

// fifth way
function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}
