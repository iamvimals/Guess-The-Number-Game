'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initalScore = 20;
let highScore = 0;

const updateDisplayMessages = function (elementClass, message) {
  document.querySelector(elementClass).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(guessedNumber);

  if (!guessedNumber) {
    updateDisplayMessages('.message', '❌ No number!');
    initalScore -= 1;
  } else if (guessedNumber === secretNumber) {
    updateDisplayMessages('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    updateDisplayMessages('.number', secretNumber);
    if (initalScore > highScore) {
      highScore = initalScore;
      updateDisplayMessages('.highscore', highScore);
    }
  } else if (guessedNumber > secretNumber) {
    updateDisplayMessages('.message', '😱 Too high!');
    initalScore--;
    updateDisplayMessages('.score', initalScore);
    if (initalScore === 0) {
      updateDisplayMessages('.message', '💣 You have lost the game!');
      const checkButton = document.querySelector('.check');
    }
  } else if (guessedNumber < secretNumber) {
    updateDisplayMessages('.message', '😒 Too low!');
    initalScore--;
    updateDisplayMessages('.score', initalScore);
    if (initalScore === 0) {
      updateDisplayMessages('.message', '💣 You have lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  initalScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  updateDisplayMessages('.score', initalScore);
  updateDisplayMessages('.number', '?');
  updateDisplayMessages('.message', 'Start guessing...');
});
