/*
Smallest value of an array


Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

*/

const min = (arr, toReturn) => {
  const min = Math.min(...arr);
  console.log(arr);
  console.log(min);
  return toReturn === "value" ? min : arr.indexOf(min);
};

console.log(min([4, 2, 1, 3, 5], "index"));

// second solution

function min2(arr, toReturn) {
  return arr.reduce(
    function (o, v, i) {
      return v < o.value ? ((o.value = v), (o.index = i), o) : o;
    },
    { value: Infinity, index: 0 }
  )[toReturn];
}

// third solution

min = (a, r, b = [...a].sort((x, y) => x - y)[0]) =>
  r[0] == "v" ? b : a.indexOf(b);

// fourth solution

function min4(arr, toReturn) {
  index = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < arr[index]) index = i;
  }
  return toReturn == "index" ? index : arr[index];
}
