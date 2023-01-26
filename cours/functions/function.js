/*

function multiply(a, b) {
    return a * b;
}

let multiply = function(a, b){
    return a * b
}


function add(a, b) {
    return a + b;
}
*/
let add = (a, b) => a + b // ES6

function multiply(a, b, callback) {
    return a * callback(a, b)
}

//  1 * add(1,2)

console.log(multiply(1, 2, add))