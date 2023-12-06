
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') result = 'Tie.'
    else if (computerMove === 'rock') result = 'You lose.';
    else if (computerMove === 'paper') result = 'You win.';
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'paper') result = 'Tie.';
    else if (computerMove === 'scissors') result = 'You lose.';
    else if (computerMove === 'rock') result = 'You win.';
  }
  else {
    if (computerMove === 'rock') result = 'Tie.'
    else if (computerMove === 'paper') result = 'You lose.';
    else if (computerMove === 'scissors') result = 'You win.';
  }

  if (result === 'You win.') {
    score.wins++;
  }
  else if (result === 'You lose.') {
    score.losses++;
  }
  else if (result === 'Tie.') {
    score.tie++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
    <img src="img/${playerMove}-emoji.png" 
    class="emojis">
    <img src="img/${computerMove}-emoji.png" 
    class="emojis">
    Computer`;
}


function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}


function pickComputerMove() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
