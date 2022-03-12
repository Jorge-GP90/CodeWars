let num = 5432100;


function digitize(num) {
    return arrConvert = Array.from(String(num), Number).reverse();
}


//other way:
function digitize(num) {
    return String(num).split('').map(Number).reverse()
}

//third way:
function digitize(num){
    return (num + '').split('').map(Number).reverse();
}