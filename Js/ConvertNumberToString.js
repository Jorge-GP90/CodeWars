/*
Convert Number to a String

We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"

*/

const numberToString = (num) => `${num}`;

console.log(numberToString(123));

// Second solution

function numberToString2(num) {
  return num.toString();
}

// Third Solution

function numberToString3(num) {
  return String(num);
}

// fourth solution

function numberToString4(num) {
  return "" + num;
}
