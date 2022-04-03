/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

// first way to solve

const disemvowel = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str.toLowerCase()[i] === "a" ||
      str.toLowerCase()[i] === "e" ||
      str.toLowerCase()[i] === "i" ||
      str.toLowerCase()[i] === "o" ||
      str.toLowerCase()[i] === "u"
    ) {
      continue;
    }
    result += str[i];
  }
  return result;
};
console.log(disemvowel("This website is for losers LOL!"));

// second way (Shortest)

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// third way

const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

// fourth way

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}
