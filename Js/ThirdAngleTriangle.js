/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.


*/

// First way

function otherAngle(a, b) {
  return (c = 180 - a - b);
}

// Second way

function otherAngle(a, b) {
  return 180 - (a + b);
}

// Third way

const otherAngle = (a, b) => 180 - a - b;
