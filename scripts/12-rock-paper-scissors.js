const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let isAutoPlaying = false;
let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    draws: 0,
    losses: 0,
  };
// console.log(localStorage.getItem('score'));

updateScoreElement();
let intervalId 

function autoplay() {
  if(!isAutoPlaying){
    
    intervalId = setInterval(()=>{
      const playerMove = pickComputerMove();
      buttonTapped(playerMove);
    },2000);
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}


function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Ties: ${score.draws}, Losses: ${score.losses}`;
};

function pickComputerMove() {
  let computerMove = ''
  const randNumber = Math.random();
  if (randNumber < 1/3) {
  computerMove = rock;
  //return;
  } else if (randNumber < 2/3) {
    computerMove = paper;
  } else {
    computerMove = scissors;
  }
  return computerMove;
}


function buttonTapped(button) {
  let result = ''
  let computerMove = pickComputerMove()


  if (button === computerMove) {
    score.draws += 1;
    result = 'Tie.';
  } else if (button === paper && computerMove === rock || button === scissors && computerMove === paper || button === rock && computerMove === scissors) {
    score.wins += 1;
    result = 'You win.';
  } else if (button === rock && computerMove === paper || button === paper && computerMove === scissors || button === scissors && computerMove === rock){
    score.losses += 1;
    result = 'You lose.';
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-emoji').innerHTML = `You<img src="src/${button}-emoji.png" class="emoji-icon">  <img src="src/${computerMove}-emoji.png" class="emoji-icon">Computer`;


  // alert(`You picked ${button}. Computer picked ${computerMove}. ${result} \nWins: ${score.wins}, Draws: ${score.draws}, Losses: ${score.losses}`);
};

const product = {
  name : 'shirt',
  'delivery time': '1 day',
  price : 5000,
  rating : {
    stars: 4.5,
    count : 90
  },
  fun: function innerFunc(){
    console.log('done')
  },
};

function resetScore() {
  score.wins = 0;
  score.draws = 0;
  score.losses = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-emoji').innerHTML = '';
};

const jsonString = JSON.stringify(product);
//console.log(JSON.parse(jsonString));