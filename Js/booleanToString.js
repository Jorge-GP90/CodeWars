

/*Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/



// first way
const booleanToString = (b) => b ? 'true' : 'false';
console.log(booleanToString(true));


// Second way
function booleanToString2(b){
    return b.toString();
}

console.log(booleanToString2(false));

// third way

function booleanToString3(b){
  return b.toString();
}
console.log(booleanToString2(true));

// fourth way 
function booleanToString4(b){
  return String(b);
}
console.log(booleanToString4(false));



// fifth way
function booleanToString5(b) {
  return `${b}`
}

console.log(booleanToString5(true));