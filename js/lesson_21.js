"use strict";

const arr = [10, 32, 15, 96, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}

// arr[99] = 7;

// // console.log(arr.length);

// console.log(arr);

// arr.forEach(function(item, i, arr){
//     console.log(`индекс ${i}: Значение '${item}' в массиве ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let index of arr) {
//     console.log(index);
// }

// const str = "Hello, World!";

// let counter = 0;

// for (let i of str) {
//     console.log(i);
//     counter++;
// }

// console.log(counter);

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));