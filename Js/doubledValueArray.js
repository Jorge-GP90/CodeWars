

let x = [1, 2, 3];

function map(x){
    return Array.from( x, y => y + y);
}
document.getElementById("test").innerHTML = map(x);


function maps(e){
    e.preventDefautl();
    let a = document.querySelector("#A1").value;
    let b = document.querySelector("#A2").value;
    let c = document.querySelector("#A3").value;
    let arr = [a, b, c];
    let double = Array.from( arr, v => v + v );
    return double;
}
console.log(maps(double));
document.querySelector(".array").addEventListener("submit", maps(double));
document.getElementById("2test").innerHTML = maps(double);


