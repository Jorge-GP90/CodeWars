/*
Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!



*/

function oddCount(n) {
  return Math.floor(n / 2);
}

console.log(oddCount(7));

// Second solution

function oddCount2(n) {
  return parseInt(n / 2);
}

// third Solution

const oddCount3 = (n) => Math.floor(n / 2);

// Fourth Solution with Negative

function oddCount4(n) {
  return n > 0 ? Math.trunc(n / 2) : -Math.trunc(n / 2);
}
