
// null 

function getVowels(str) {   
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));
  // expected output: 0
  

//   Undefined

function test(t) {
    if (t === undefined) {
      return 'Undefined value!';
    }
    return t;
  }
  
  let x;
  
  console.log(test(x));
  // expected output: "Undefined value!"