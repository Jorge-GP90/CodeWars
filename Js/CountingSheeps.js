/*

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

// first way
const countSheep = (num) => {
  let sheeps = [];
  for (var i = 0; i < num; i++) {
    sheeps[i] = [i + 1 + " sheep..."];
  }
  return sheeps.join("").toString();
};

console.log(countSheep(3));

// second way

var countSheep2 = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

console.log(countSheep2(4));

// third way

const countSheep3 = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
