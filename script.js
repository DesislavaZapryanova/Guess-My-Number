'use strict';


let secretNumber = Math.trunc(Math.random() *20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};
const displayNumber = function(number){
  document.querySelector('.number').textContent = secretNumber;
};
const displayHighscore = function(highscore){
  document.querySelector('.highscore').textContent = highscore;
};
const displayScore = function(score){
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess){
    // document.querySelector('.message').textContent = 'No number!';
  displayMessage('No number!');
  
  // when player wins
  }else if(guess === secretNumber){
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);

  if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
    //WHEN GUESS IS WRONG
   }else if (guess!== secretNumber){
      if(score > 1){
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score--;
        displayScore(score);
      }else {
        displayMessage('You lost the game!')
        displayScore(score = 0);
      }
    }
});

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() *20) +1;
  score = 20;


  displayMessage('Start guessing...')
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#333333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  });


