'use strict';
// let check = document.querySelector('.check');
// let score = document.querySelector('.score').textContent;
// score = 100;

const secretNumber = Math.ceil(Math.random() * 100);

let guess = document.querySelector('.guess');
let message = document.querySelector('.message');

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let score = document.querySelector('.score');
score.textContent = 100;

check.addEventListener('click', function(){
    const guessValue = parseFloat(guess.value);
    console.log(guessValue)
    if(!guessValue){
        message.textContent = "🚫 No Number!!!"
    }
    if (score.textContent > 0) {
        if(guessValue > secretNumber){
            message.textContent = "📈Too High!!!"
            score.textContent-=20;
        } else if(guessValue < secretNumber){
            message.textContent = "📉Too Low!!!"
            score.textContent-=20;
        }
    } 
    if (Number(score.textContent) === 0) {
        message.textContent = "🚩 You lost the game!!!"
        document.querySelector('.number').textContent = secretNumber;
    }
    if(guessValue === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        message.textContent = "🎉 Correct Number!!!"
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
    }
});

again.addEventListener('click', function() {
    document.querySelector('.number').textContent = '?';
    secretNumber;
    guess.value = null;
    score.textContent = 100;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    message.textContent = "Start guessing...";

})

