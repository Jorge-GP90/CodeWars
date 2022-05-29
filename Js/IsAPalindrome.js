/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindromeABC(x) {
  const value = x.toLowerCase().split("");
  const half = value.length / 2;
  let arrOne = value.slice(0, half);
  let arrTwo = value.slice(half, value.length);
  const compare = arrOne.reverse();
  const res = `${compare}` === `${arrTwo}`;
  return res;
}

function isPalindrome(x) {
  const value = x.toLowerCase().split("");
  return `${value}` === `${value.reverse()}` ? true : false;
}

console.log(isPalindrome("hello"));

// Second solution

const isPalindrome2 = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};

// third solution

function isPalindrome3(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}
