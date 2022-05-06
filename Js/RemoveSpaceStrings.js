/*
 Remove Space String
 
 Simple, remove the spaces from the string, then return the resultant string.

 
 */

function noSpace(x) {
  return [...x].map((x) => [...x].join("")).join("");
}

console.log(noSpace("1,  2,  3"));
