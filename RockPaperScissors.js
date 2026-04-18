let choices = ['rock', 'paper', 'scissors'];

document.querySelector('.computer-choice').textContent = '?';
document.querySelector('.player-choice').textContent = '?';

let player_score = 0;
let computer_score = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelectorAll('.choice').forEach(function (button) {
  button.addEventListener('click', function () {
    const players_choice = this.classList[1];
    const computerchoice =
      choices[Math.trunc(Math.random() * choices.length)];

    document.querySelector('.player-choice').textContent = players_choice;
    document.querySelector('.computer-choice').textContent = computerchoice;

    if (players_choice === computerchoice) {
      displayMessage("It's a draw!");
      document.querySelector('body').style.backgroundColor = '#222';
    } else if (
      (players_choice === 'rock' && computerchoice === 'scissors') ||
      (players_choice === 'paper' && computerchoice === 'rock') ||
      (players_choice === 'scissors' && computerchoice === 'paper')
    ) {
      displayMessage('Winner!');
      player_score++;
      document.querySelector('.player-score').textContent = player_score;
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else {
      displayMessage('Loser!');
      computer_score++;
      document.querySelector('.computer-score').textContent = computer_score;
      document.querySelector('body').style.backgroundColor = '#f12727';
    }

    if (player_score === 5) {
      displayMessage('You win the game!');
    } else if (computer_score === 5) {
      displayMessage('You lost the game!');
    }
  });
});

document.querySelector('.again').addEventListener('click', function () {
  player_score = 0;
  computer_score = 0;

  document.querySelector('.player-score').textContent = player_score;
  document.querySelector('.computer-score').textContent = computer_score;
  document.querySelector('.player-choice').textContent = '?';
  document.querySelector('.computer-choice').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('Choose Rock, Paper, or Scissors!');
});