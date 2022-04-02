/*

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

// First solution
const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
};

console.log(twiceAsOld(29, 0));

// Second Way

function twiceAsOld(a, b) {
  return a > 2 * b ? a - 2 * b : 2 * b - a;
}

//   third way
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
