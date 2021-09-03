"use strict";

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach (item => {
    item.style.backgroundColor = 'purple';
});

const div = document.createElement('div');
// const div1 = document.createElement('button');
// div1.textContent = '1111111dfvbdfgbdfgbdfgbdfgbdfgbdfgbdfgbdfgb';

div.classList.add('black');
// div1.classList.add('heart');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div1);

// hearts[1].after(div);
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();

// hearts[1].replaceWith(circles[0]);

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[1], hearts[1]);

div.innerHTML = "<h1>Hello!</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');