/* Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
*/ 


//  array1
/*
const array1 = [3, 4, 4, 3, 6, 3];
let arrayS = array1.sort((a,b) => a - b);
let j = 0;
console.log(arrayS);
for (let i = 0; i < arrayS.length; i++) {
    if (arrayS[i] != arrayS[i + 1]) {
        arrayS[j++] = arrayS[i];
    }
}
arrayS[j++] = arrayS[arrayS.length -1];

for (let k = 0; k < j; k++) {
    const ArrayRmDp = (array[k] + " ");
    
}
*/

// Js method
// unorder values
let a1 = [3, 4, 4, 3, 6, 3, 2, 2, 2];
let len1 = a1.length;
let b1 = [];
for(let i = 0; i < len1; i++){
    if(b1.indexOf(a1[i]) === -1){
        b1.push(a1[i]);
    }
}
console.log(b1);

// ordered values

let a2 = [3, 4, 4, 3, 6, 3, 2, 2, 2];
let len2 = a2.length;
let b2 = [];

a2.sort();

let _temp;

for(let i = 0; i < len2; i++){
    if(a2[i] !== _temp){
        b2.push(a2[i]);
        _temp = a2[i];
    }
}
console.log(b2);


// with objects

let a3 = [3, 4, 4, 3, 6, 3, 2, 2, 2];

obj = {};
for (let i of a3) {
    obj[i] = true;
}

let b3 = Object.keys(obj);

console.log(b3);

// On one line

let a4 = [3, 4, 4, 3, 6, 3, 2, 2, 2];

let bSet = new Set(a4);

console.log(bSet); //brings a Set not an array

let bSet2 = [... new Set(a4)];
console.log(bSet2);// unordered

let bSet3 = [... new Set(a4)].sort();
console.log(bSet3);// ordered


// solution 5
let arr = [10, 5, 64, 3, 6, 10, 3, 2, 2, 2];
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
console.log(solve(arr));