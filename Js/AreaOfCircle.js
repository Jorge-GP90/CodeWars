/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

function squareArea(A) {
  let res = (A * 2) / Math.PI;
  console.log(res);
  const res2 = Math.pow(res, res);
  console.log(res2);
  res = res * res;
  console.log(res);
  return parseFloat(res.toFixed(2));
}

console.log(squareArea(2));

// Second Solution

squareArea2 = (A) => +Math.pow((2 * A) / 3.1416, 2).toFixed(2);

// Third Solution

function squareArea3(A) {
  return +Math.pow((4 * A) / (Math.PI * 2), 2).toFixed(2);
}

// Fourth Solution

squareArea4 = (A) => +(((A * 2) / Math.PI) ** 2).toFixed(2);
