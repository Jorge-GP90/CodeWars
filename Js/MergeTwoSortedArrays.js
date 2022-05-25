/*

Merge two sorted arrays into one

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


*/

const mergeArrays = (arr1, arr2) => {
  let total_arr = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  let total = [...new Set(total_arr)];

  return total;
};

console.log(mergeArrays([1, 2, 9, 4], [3, 6, 7, 8]));

// second solution

function mergeArrays2(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

// Third solution
function mergeArrays3(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}

// fourth solution

let mergeArrays = (a, b) => [...new Set([...a, ...b])].sort((a, b) => a - b);
