'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc(Math.random() * 21);
let score = 20;
let highScore = 0;

const updateTextContent = function (selector, message) {
  document.querySelector(selector).textContent = message;
};

const onNoInput = function () {
  updateTextContent('.message', '⛔️ No number!');
};

const onGuessRight = function () {
  updateTextContent('.message', '✅ Correct Number!');
  updateTextContent('.number', secretNumber);
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if (score > highScore) {
    highScore = score;
    updateTextContent('.highscore', highScore);
  }
};

const onGuessWrong = function () {
  if (score > 1) {
    updateTextContent(
      '.message',
      guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
    );
    score--;
    updateTextContent('.score', score);
  } else {
    updateTextContent('.message', '💥 You lost the game!');
    updateTextContent('.score', '0');
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    onNoInput();
  } else if (guess === secretNumber) {
    onGuessRight();
  } else if (guess !== secretNumber) {
    onGuessWrong();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  updateTextContent('.number', '?');
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  updateTextContent('.score', score);

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  updateTextContent('.message', 'Start guessing...');
});
