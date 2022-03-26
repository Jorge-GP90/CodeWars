// Count of positives/ sum of negatives

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// first trying

function countPositivesSumNegatives(input) {
  let PosSum = 0;
  let NegSum = 0;
  if (input.length === 0 || null) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      NegSum -= -input[i];
    }
    PosSum += -input[i];
  }
  return [PosSum, NegSum];
}

console.log(
  countPositivesSumNegatives([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
  ])
);

//  second trying

function countPositivesSumNegatives2(input) {
  let PosSum = 0;
  let NegSum = 0;
  if (input.length === 0 || null) {
    return [];
  }
  PosSum = input.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  if (input < 0) {
    NegSum = input.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }
  return [PosSum, NegSum];
}

console.log(countPositivesSumNegatives2([0, 2, 3, 0, 5, 6, 7, 8, 9, 10]));

// First way
function countPositivesSumNegatives3(input) {
  if (input.length == 0 || input.length == null) {
    return [];
  }
  let PosSum = 0;
  let NegSum = 0;
  for (let i = 0, l = input.length; i < l; i++) {
    if (input[i] < 0) {
      NegSum += input[i];
    }
    if (input[i] > 0) {
      ++PosSum;
    }
  }
  return [PosSum, NegSum];
}

console.log(
  countPositivesSumNegatives3([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
  ])
);

// Correction in empty value
function countPositivesSumNegatives4(input) {
  if (!Array.isArray(input) || !input.length) return [];

  let PosSum = 0;
  let NegSum = 0;
  for (let i = 0, l = input.length; i < l; i++) {
    if (input[i] < 0) {
      NegSum += input[i];
    }
    if (input[i] > 0) {
      ++PosSum;
    }
  }
  return [PosSum, NegSum];
}
console.log(countPositivesSumNegatives4(null));
