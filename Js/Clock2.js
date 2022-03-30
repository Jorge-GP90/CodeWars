/*


Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/

function past(h, m, s) {
  let miliSecondsPast = 0;
  if (0 <= h <= 23) {
    if (0 <= m <= 59) {
      if (0 <= s <= 59) {
        miliSecondsPast = h * m * s * 1000;
      }
      miliSecondsPast = h * m * 1000;
    }
    if (0 <= s <= 59) {
      miliSecondsPast = h * s * 1000;
    }
    miliSecondsPast = h * 1000;
  }
  if (0 <= m <= 59) {
    if (0 <= s <= 59) {
      miliSecondsPast = m * s * 1000;
    }
    miliSecondsPast = m * 1000;
  }
  if (0 <= s <= 59) {
    miliSecondsPast = s * 1000;
  }

  return miliSecondsPast;
}

console.log(past(0, 1, 1));
