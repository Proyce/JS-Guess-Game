'use strict';
let endRange = (Math.ceil(Math.random() * 100));
if (endRange < 10) endRange += 10;
let secretNumber = (Math.ceil(Math.random() * endRange));
const range = document.querySelector('.range');
range.textContent = endRange;

let guess = document.querySelector('.guess');
let message = document.querySelector('.message');

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
score.textContent = 100;
highscore.textContent = 0;

check.addEventListener('click', function(){    
    const guessValue = parseFloat(guess.value);    
    if(!guessValue){
        message.textContent = "🚫 No Number!!!"
    }
    if (score.textContent > 0) {
        if(guessValue > secretNumber){
            message.textContent = "📈Too High!!!"
            score.textContent-=5;
        } else if(guessValue < secretNumber){
            message.textContent = "📉Too Low!!!"
            score.textContent-=5;
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
        document.querySelector('.number').style.width = '30rem';        
        if(score.textContent > highscore.textContent) {
            highscore.textContent = score.textContent;
        }
    }
});

again.addEventListener('click', function() {
    document.querySelector('.number').textContent = '?';
    endRange = (Math.ceil(Math.random() * 100));
    if (endRange < 10) endRange += 10;
    secretNumber = (Math.ceil(Math.random() * endRange));
    range.textContent = endRange;    
    guess.value = null;
    score.textContent = 100;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    message.textContent = "Start guessing...";

})
