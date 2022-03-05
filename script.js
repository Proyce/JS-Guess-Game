'use strict';

// console.log(document.querySelector('.message').innerHTML);

const number = Math.floor(Math.random(51))
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number";

document.querySelector('.score').textContent = 50;
document.querySelector('.number').textContent = 13;

let guess = document.querySelector('.guess');
guess.value = 100;
console.log(guess.value);

let check = document.querySelector('.check');

check.addEventListener('click', function(){
    console.log(guess.value)
});
