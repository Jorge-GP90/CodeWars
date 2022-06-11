/*
Return Negatives

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

function makeNegative(num) {
  return num < 0 ? num : -num;
}

console.log(makeNegative(5));

// second solution

const makeNegative2 = (num) => {
  return -Math.abs(num);
};

// third solution

function makeNegative3(num) {
  return num <= 0 ? num : num * -1;
}
