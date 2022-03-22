/*

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

*/

const flip=(d, a)=>{
    if(d === 'R'){  
      a.sort(function (a, b) {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
      });
    }  

    return a;
    
    if (d === 'L'){
        a.sort((a, b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
          });
    }
    return a.reverse();
}
console.log(flip('R', [13, 2, 4, 7, 93]));// pass
console.log(flip('L', [13, 2, 4, 7, 93])); //failed


// passing one side
const arr=(d, a)=>{
    if(d === 'R'){  
    return a.sort((a, b) => a - b);
    }  
}
console.log(arr('R', [14, 1, 3, 6, 97]));



// First Complete  when values are bigger than 2 digits

const alter=(d, a)=>{
     if(d === 'R'){  
      return a.sort((a, b) => a - b);
      }  
      if (d === 'L'){
        left = a.sort((a, b) => a - b);
        return left.reverse();
      }
  }

console.log(alter('R', [12, 1, 3, 6, 98]));
console.log(alter('L', [11, 3, 5, 7, 97]));


// second way  

const flip2 = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

console.log(flip2('R', [122, 1, 3, 6, 983]));
console.log(flip2('L', [113, 3, 5, 7, 974]));

// third way

const flip3=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }

console.log(flip3('R', [234, 1, 3, 6, 583]));
console.log(flip3('L', [32, 3, 5, 7, 574]));

