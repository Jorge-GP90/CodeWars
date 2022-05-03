/*

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = (arr) => {
  return arr.filter((_, i) => i % 2 == 0);
};

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// second solution
function removeEveryOther2(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// third solution
function removeEveryOther3(arr) {
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

// Fourth solution

const removeEveryOther4 = (arr) => arr.filter((_, i) => !(i % 2));
