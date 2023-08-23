let SecretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// Event Listner
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('☹️ Please guess a Number');

    // When player wins
  } else if (guess === SecretNumber) {
    displayMessage('🙌 Correct Number');
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    // When Guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(
        guess > SecretNumber ? '📈 Too High' : '📉 Too Low'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// event Listner for Again Button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
