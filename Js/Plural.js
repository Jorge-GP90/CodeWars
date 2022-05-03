/*
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/

const plural = (n) => {
  return n != 1 ? true : false;
};

console.log(plural(0.5));

// second solution
function plural2(n) {
  return n !== 1;
}

// third solution

function plural3(n) {
  if (n >= 0) {
    if (n == 1) {
      return false;
    } else {
      return true;
    }
  }
}
