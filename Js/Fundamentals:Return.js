/*

Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

*/

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

const add2 = (a, b) => a + b;
const divide2 = (a, b) => a / b;
const multiply2 = (a, b) => a * b;
const mod2 = (a, b) => a % b;
const exponent2 = (a, b) => a ** b;
const subt2 = (a, b) => a - b;

console.log(add2(2, 3));
console.log(divide2(2, 3));
console.log(multiply2(2, 3));
console.log(exponent2(2, 3));
console.log(mod2(2, 3));
console.log(subt2(2, 3));
