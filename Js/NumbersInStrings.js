/*

In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

*/



// first way with regex
function solve(s){
    let arr = s.replace(/[^0-9/]/g, ' ').split(' ')
    return Math.max(...arr)
  }
 
  console.log(solve("gh12cdy695m1"));

  
//   second way with map, parseInt and NaN

function solve(s){
    return s.split('').map(item => parseInt(item)).reduce((sum, item, i, arr) => !isNaN(item) ? sum + item : isNaN(item) && !isNaN(arr[i-1]) ? sum+' ' : sum+'','').split(' ').map(item => parseInt(item)).filter(item => !isNaN(item)).sort((a, b) => b-a)[0];
  };


console.log(solve("gh12ce4666dy695m1"));

// best practice solution in function statement

  function solve(s){
    return Math.max(...s.match(/\d+/g));
  };
 
console.log(solve("gh1299cdy695m1"));
//   best practice solution with arrow

solve=s=>Math.max(...s.match(/\d+|$/g));


console.log(solve("gh12cdy695m1099"));