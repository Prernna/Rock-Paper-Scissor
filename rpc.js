let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  function playGame(playerMove) {
    let computerMove = ComputerMove();
    let result = '';

    if (playerMove === 'rock') {
      if (computerMove === 'rock') result = 'Tie';
      else if (computerMove === 'paper') result = 'You Lose';
      else result = 'You Won';
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') result = 'You Won';
      else if (computerMove === 'paper') result = 'Tie';
      else result = 'You Lose';
    } else if (playerMove === 'scissor') {
      if (computerMove === 'rock') result = 'You Lose';
      else if (computerMove === 'paper') result = 'You Won';
      else result = 'Tie';
    }

    if (result === 'You Won') {
      score.wins += 1;
    } else if (result === 'You Lose') {
      score.losses += 1;
    } else {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML =
      `You
      <img src="./${playerMove}.png" class="move-icon">
      <img src="./${computerMove}.png" class="move-icon">
      Computer`;
  }

  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
      `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function ComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) return 'rock';
    else if (randomNumber < 2 / 3) return 'paper';
    else return 'scissor';
  }