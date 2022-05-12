/*

Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

function solution(str) {
  return `${[...str].reverse().join("")}`;
}

console.log(solution("world"));

// second Solution

function solution2(str) {
  return str.split("").reverse().join("");
}

// third solution
function solution3(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}
