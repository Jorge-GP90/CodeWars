
    var ar = [1, 2, 3, 4, 5, 6];
    
    ar.length = 4; // set length to remove elements
    console.log( ar ); // [1, 2, 3, 4]

    ar.pop(); // returns 6
    
    console.log( ar ); // [1, 2, 3, 4, 5]

    var ar = ['zero', 'one', 'two', 'three'];
    
    ar.shift(); // returns "zero"
    
    console.log( ar ); // ["one", "two", "three"]