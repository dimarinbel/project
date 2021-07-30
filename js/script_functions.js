"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage('Hello, World!');
console.log(num);

// function calc(a, b) {
//     return(a * b);
// }

// console.log(calc(4, 5));
// console.log(calc(17, 8));
// console.log(calc(345, 35));

function ret() {
    let num = 50;
    return(num);
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello!');
};

logger();

const calc = (a, b) => {
    return a + b;
};

console.log(calc(4,5));