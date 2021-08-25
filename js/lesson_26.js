"use strict";

// to String

// 1)

console.log(typeof(String(null)));

// 2)

console.log(typeof(7 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';
console.log(fontSize);

// to number

// 1)

console.log(typeof(Number('4')));

// 2)

console.log(typeof(+'5'));

// 3)

console.log(typeof(parseInt('15px', 10)));

// to Boolean

// 0, '', null, undefined, NaN;

// 1)
let switcher = null;

// switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));