

// implement a fucntion that multiplying two numbers



const multiply = (value1, value2) =>  value1*value2 

console.log(multiply(2 ,3));


//second way (best practices?)

function multiply2(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;  
}	

console.log(multiply2(2 ,3));
