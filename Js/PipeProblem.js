/*

Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/
numbers = [1, 2, 3, 5, 6, 8, 9];

const pipeFix = (numbers) => {
  let num = [];
  let plus = numbers[0];
  for (i = 0; i < numbers.at(-1); i++) {
    num[i] = plus;
    plus++;
  }
  return num;
};

console.log(pipeFix(numbers));

const len = numbers[numbers.length - 1];
console.log(len);

// other way
const PipeFix = (numbers) => {
  let num = [];
  let plus = numbers[0];
  const len = numbers[numbers.length - 1];
  for (i = 0; i < len; i++) {
    num[i] = plus;
    plus++;
  }
  return num;
};

console.log(PipeFix(numbers));

// second solution

function pipeFix2(numbers) {
  var first = numbers[0];
  var last = numbers[numbers.length - 1];

  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

//   third solution
let pipeFix3 = (nums) =>
  Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
