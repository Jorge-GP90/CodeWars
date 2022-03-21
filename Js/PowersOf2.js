

/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).


Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/


/*
n = 2;  

function powersOfTwo(n){
  let i = 1;
  while (i < n){
    i *= 2;
  }
  return i === n;
  console.log(i === n);
}
*/

// display the exponential of the number of n in array  ( but not previews ones) 
function powersOfTwo(n) {
  let pwrTwo = [];
  for (let i = 0; i < n; i++) {
    pwrTwo[i] = Math.pow(n,2);
  }
  return pwrTwo;
}
console.log(powersOfTwo(2));

// pushing the number of n in array ( but no the exponent)
function pwOfTwo(n) {
  let pwrTw = [];
  for (let i = 0; i < n; i++) {
    num = Math.pow(n,2);
    pwrTw[i] = pwrTw.push(num);

  }
  return pwrTw;
}
console.log(pwOfTwo(5));

// first way correct

function poTwo(n) {
  let pwTw = [];
  for (let i = 0; i <= n; i++) {
    pwTw.push(Math.pow(2,i)); 
  }
  return pwTw;
}
console.log(poTwo(4));

// Second way correct
function powersOfTwo(n){
  let res = [];
  do {
    res.unshift(Math.pow(2, n));
  } while (n--);
  return res;
}
console.log(poTwo(5));

// third way correct using map
function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i)
}
console.log(poTwo(6));