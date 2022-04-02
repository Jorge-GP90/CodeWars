/*


Clock shows h hours, m minutes and s seconds after midnight.

mour task is to write a function which returns the time since midnight in milliseconds.

Ehample:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/

// first try and failed
function past(h, m, s) {
  let miliSecondsPast = 0;
  if (h === 0 && m === 0 && s === 0) {
    miliSecondsPast = 0;
  }
  if (h <= 23 && h != 0) {
    if (m <= 59) {
      if (s <= 59) {
        miliSecondsPast = (h * 24 + m * 60 + s) * 1000;
      }
      miliSecondsPast = (h * 24 + m * 60) * 1000;
    }
    if (s <= 59) {
      miliSecondsPast = (h * 24 + s) * 1000;
    }
    miliSecondsPast = h * 24 * 1000;
  }
  if (0 <= m <= 59) {
    if (0 <= s <= 59) {
      miliSecondsPast = (m * 60 + s) * 1000;
    }
    miliSecondsPast = m * 60 * 1000;
  }
  if (0 <= s <= 59) {
    miliSecondsPast = s * 1000;
  }

  return miliSecondsPast;
}

// console.log(past(0, 1, 1));

// first way solved

const timePast = (h, m, s) => {
  let mSecondsPast = 0;
  if (h === 0 && m === 0 && s === 0) {
    mSecondsPast = 0;
  }
  return 0 <= h <= 23
    ? (mSecondsPast = (h * 3600 + m * 60 + s) * 1000)
    : 0 <= m <= 59
    ? (mSecondsPast = (m * 60 + s) * 1000)
    : (mSecondsPast = s * 1000);
};
console.log(timePast(0, 1, 1));

// Second way

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
console.log(past(1, 2, 1));

// third way

function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);

  return Math.round(setTime - midnight);
}
