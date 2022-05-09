/*
 Remove Space String
 
 Simple, remove the spaces from the string, then return the resultant string.

 
 */

const noSpace = (x) => {
  let res = [...x];
  let res2 = [];
  for (i = 0; i < res.length; i++) {
    if (res[i] !== " ") {
      res2 += res[i];
    }
    // res[i] !== " " ? (res2 = res[i].push()) : (res2 = res[i].shift());
  }
  return res2;
};

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// second Solution
function noSpace2(x) {
  var result = "";
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}

// Third solution

const noSpace3 = (x) => x.split(" ").join("");

// Fourth solution
function noSpace4(x) {
  return x.replace(/ /g, "");
}

//  Fifth Solution
function noSpace(x) {
  return x.replace(/\s/g, "");
}
