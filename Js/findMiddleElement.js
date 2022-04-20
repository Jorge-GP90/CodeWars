/*

As a part of this Kata, you need to create a function that when provided with a arr, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

function gimme(triplet) {
  const arr = triplet;
  const findVal = () => {
    const i = 0;
    if (arr[i] > arr[i + 1] && arr[i] > arr[i + 2]) {
      return arr[i];
    }
    if (arr[i + 1] > arr[i] && arr[i + 1] > arr[i + 2]) {
      return arr[i + 1];
    }
    if (arr[i + 2] > arr[i] && arr[i + 2] > arr[i + 1]) {
      return arr[i + 2];
    }
  };

  return triplet.findIndex(findVal);
}

function gimme2(triplet) {
  const order = triplet.sort((a, b) => a - b);
  const middle = order.find((val) => val === order[1]);
  return triplet.findIndex(middle);
}

// console.log(gimme2([2, 3, 1]));

// This WORSK but not inside the function

const tri1 = [-5.2, -100.6, -14];
const tri = [-5.2, -100.6, -14];
//console.log(tri);
const order2 = tri.sort((a, b) => a - b);
const middle2 = order2.find((val) => val === order2[1]);

// console.log(order2);
// console.log(middle2);
// console.log(tri1);
// console.log([-5.2, -10.6, 14].indexOf(middle));
// console.log(tri1.indexOf(middle));

// complete

// Solution 1

function gimme2(triplet) {
  console.log(triplet);
  const oA = originalArray(triplet);
  console.log(oA);
  let result = -1;
  const middle = oA.find((val) => val === oA[1]);
  const val1 = triplet.find((mid) => mid === middle);
  console.log(val1);
  if (val1 === triplet[0]) {
    result = 0;
  }
  if (val1 === triplet[1]) {
    result = 1;
  }
  if (val1 === triplet[2]) {
    result = 2;
  }
  return result;
}

const originalArray = (arr) => {
  let order = [...arr];
  order.sort((a, b) => a - b);
  return order;
};

console.log(gimme2([-5, -30, 1]));

// Solution 2

function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

//   solution 3

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

//   solutionm 4
var gimme = function (inputArray) {
  if (
    (inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2]) ||
    (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2])
  )
    return 0;

  if (
    (inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2]) ||
    (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2])
  )
    return 1;

  if (
    (inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1]) ||
    (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1])
  )
    return 2;
};
