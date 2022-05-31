/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

*/

function doubleChar(str) {
  const double = [...str].map((x) => x + x);
  return `${double.join("")}`;
}

console.log(doubleChar("String"));

// second solution

const doubleChar2 = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

// third solution

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1");
}

// fourth solution
function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}
