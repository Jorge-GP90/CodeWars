/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


*/

function smash(words) {
  return `${[words].join("").replace(/,/g, " ")}`;
}

console.log(smash(["hello", "amazing", "world"]));

// Second solution

function smash2(words) {
  "use strict";
  return words.join(" ");
}

// Third solution

function smash3(words) {
  "use strict";
  return words.join(" ").trim();
}

// Fourth Solution

function smash4(words) {
  "use strict";
  var smashed = "";
  for (var i = 0; i < words.length; i++) {
    smashed += words[i];
    if (i != words.length - 1) {
      smashed += " ";
    }
  }
  return smashed;
}
