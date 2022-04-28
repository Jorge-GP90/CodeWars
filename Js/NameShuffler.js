/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

// first solution
const nameShuffler = (str) => {
  const [FirstName, LastName] = str.trim().split(" ");
  return `${LastName} ${FirstName}`;
};

console.log(nameShuffler("john McClane"));

// Second solution

function nameSuffle2(str) {
  return str.split(" ").reverse().join(" ");
}

//   third solution
const nameShuffler3 = (str) => {
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);
};

// fourth solution
function nameSuffle4(str) {
  var arr = str.split(" ");
  return arr[1] + " " + arr[0];
}
