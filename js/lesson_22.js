"use strict";

function copy(mainObj){
        let objCopy = {};

        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }

        return objCopy;
}

const numbers = {
    a: 4,
    b: 7,
    c: {
        d: 8,
        e: 11
    }
};

const newNumbers = copy(numbers);

newNumbers.b = 1111;
newNumbers.c.e = 546;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    x: 60,
    y: 43
}



// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.x = 77;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 7];
const newArray = oldArray.slice();

newArray[0] = 'd';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function showLog(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [3, 55, 92];

showLog(...num);

const array = ['a', 'b'];

const copyArray = [...array];

console.log(copyArray);

const q = {
    qqq: 2,
    vvv: 3
};

const newObj = {...q};

console.log(newObj);

