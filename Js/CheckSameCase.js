/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

const sameCase = (a, b) => {
  let res;
  let UPPERCASE = /[^A-Z]/g;
  let lowercase = /[^a-z]/g;

  if (a != UPPERCASE) {
    res = 0;
  }
  if (b != UPPERCASE) {
    res = 0;
  }
  if (a != lowercase) {
    res = 0;
  }
  if (b != lowercase) {
    res = 0;
  }

  a === a.toUpperCase() && b === b.toUpperCase()
    ? (res = 1)
    : a === a.toLowerCase() && b === b.toLowerCase()
    ? (res = 2)
    : (res = 0);

  return res;
};

console.log(sameCase("A", "b"));

//  First Solution
function sameCase2(a, b) {
  if (
    a.toLowerCase() === a.toUpperCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  }
  return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
}

// Second solution

const sameCase3 = (a, b) =>
  /[a-z]/i.test(a) && /[a-z]/i.test(b)
    ? Number(/[a-z]/.test(a) == /[a-z]/.test(b))
    : -1;

// third Solution

function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}
