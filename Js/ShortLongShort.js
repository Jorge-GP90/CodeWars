/*

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"


*/

const solution = (a, b) => {
  console.log(a.length);
  console.log(b.length);
  const shortb = [a, b, a].join("");
  const shorta = [b, a, b].join("");
  console.log(shorta);
  console.log(shortb);
  let result = `${a.length > b.lenght ? shortb : shorta}`;
  return result;
};

// console.log(solution("13", "200"));

const solution2 = (a, b) => {
  const shorta = [b, a, b].join("");
  const shortb = [a, b, a].join("");
  if (a.lenght > b.lenght) {
    return shortb;
  }
  return shorta;
};

console.log(solution2("13", "200"));

// third solution

function solution3(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

// fourth solution

// Using if...else, explicit block syntax
function solution(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
  if (a.length < b.length) return a + b + a;
  return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

// ES6 arrow function
var solution = (a, b) => (a.length < b.length ? a + b + a : b + a + b);
