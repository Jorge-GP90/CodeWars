let x = [1, 2, 3];

function map(x){
    return Array.from( x, y => y + y);
}

document.getElementById("test").innerHTML = map(x);
