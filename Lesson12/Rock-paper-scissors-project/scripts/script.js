
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}


document.querySelector('.js-rock-btn') 
.addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-btn') 
.addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-btn') 
.addEventListener('click', () => {
    playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r') playGame('rock');
    else if (event.key === 'p') playGame('paper');
    else if (event.key === 's') playGame('scissors');
});


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
