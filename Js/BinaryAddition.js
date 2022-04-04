/*

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

const addBinary = (a, b) => {
  a &= b;
  console.log(a);
  return (a >>> 0).toString(2);
};

console.log(addBinary(1, 2));

const decToBin = (dec) => {
  let bin = "";
  let f = false;

  while (!f) {
    bin = bin + (dec % 2);
    dec = Math.trunc(dec / 2);

    if (dec === 0) f = true;
  }

  return bin.split("").reverse().join("");
};

console.log(decToBin(0));
console.log(decToBin(1));
console.log(decToBin(2));
console.log(decToBin(3));
console.log(decToBin(4));
console.log(decToBin(5));
console.log(decToBin(6));
