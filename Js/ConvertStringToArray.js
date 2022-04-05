/*

Convert a String to Array




Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]




*/

const stringToArray1 = (string) => {
  let result = [];

  let strSplit = string.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === "") {
      result[i].push();
    }
    strSplit.join();
  }

  return result[i];
};

// First solution
const stringToArray = (string) => string.split(/[" "]/);

console.log(stringToArray("hello I could make it"));

// Second Way

const stringToArray2 = (string) => {
  return string.trim().split(" ");
};

console.log(stringToArray2("hello I could make it twice"));

// Other way

function stringToArray3(string) {
  var result = [];
  var traverse = function foo(string) {
    for (var i = 0; i < string.length; i++) {
      var chr = string.charAt(i);
      if (chr === " ") {
        result.push(string.slice(0, i));
        foo(string.slice(i + 1));
        return;
      }
    }
    result.push(string);
  };
  traverse(string);
  return result;
}
