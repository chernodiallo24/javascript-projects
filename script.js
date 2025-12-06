'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!!';

document.querySelector('.number').textContent = '20';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);

document.querySelector('.between').textContent = "(Between 1 and 25)";
*/
const randumnum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randumnum;
 let score = 20;
 let highscore = 0;
document.querySelector('.check').addEventListener('click',function() {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    if (!guess) {
    document.querySelector('.message').textContent = 'no number!!';
} else if (guess === randumnum) {
    document.querySelector('.message').textContent = 'correct number!!';
    document.querySelector('.score').textContent = 
    score++;

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').
        textContent = highscore;
    }
} else if (guess < randumnum) {
    if (score > 0) {
     document.querySelector('.message').textContent = 'too low !!';
     document.querySelector('.score').textContent =
     score--;
    } else {
        document.querySelector('.message').textContent = 'you lost the game';
    }
} else if (guess > randumnum) {
     document.querySelector('.message').textContent = 'too high!!';
     document.querySelector('.score').textContent = 
     score--;
} else {
    document.querySelector('.message').textContent = 'wrong number!!';
    }
});



document.querySelector('.again').addEventListener('click',function() { 
    score = 20;
    newnum = Math.trunc(Math.random()*20)+1;
     document.querySelector('.message').textContent = 'Start Guessing...' ;
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
   
    });

