/*

Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

const highestAndLowest = (str) => {
  arr = [...str];
  const low = Math.min(...arr);
  const high = Math.max(...arr);
  return `highest:${high} lowest: ${low}`;
};

const highAndLow2 = (str) => {
  arr = [...str];
  const low = arr.reduce((a, b) => Math.min(a, b));
  const high = Math.max(...arr);
  return `highest:${high} lowest: ${low}`;
};

// first solution

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
console.log(highAndLow("1 2 3 4 5"));

//  second solution

function highAndLow2(numbers) {
  var arr = numbers.split(" ").sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0];
}

// third solution
function highAndLow3(numbers) {
  var numArray = numbers.split(" ");
  var max = Number(numArray[0]);
  var min = Number(numArray[0]);
  var num;

  for (var i = 1; i < numArray.length; i++) {
    num = Number(numArray[i]);

    if (num > max) max = num;
    if (num < min) min = num;
  }

  return max + " " + min;
}
