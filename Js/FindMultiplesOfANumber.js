/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

*/

// First way
function findMultiples(integer, limit) {
  let result = [];
  if (integer > 0) {
    const len = limit / integer;
    for (let i = 1; i <= len; i++) {
      result[i - 1] = integer * i;
    }
    return result;
  }
  return;
}
console.log(findMultiples(5, 25));

// Second Way
function findMultiples2(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

// third way

function findMultiples3(int, limit) {
  return Array(Math.floor(limit / int))
    .fill(1)
    .map((x, i) => int * (i + 1));
}

// Fourth Way

const findMultiples = (integer, limit) =>
  [...Array((limit / integer) ^ 0)].map((_, idx) => ++idx * integer);
