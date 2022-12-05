let firstCard =10; //Math.floor(Math.random()*(10)) + 2;
let secondCard = 11; //Math.floor(Math.random()*(10)) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

const startBtn = document.getElementById('start');
let messageEl = document.getElementById('message-el');

startBtn.addEventListener('click',startGame);

function startGame(){
    if(sum < 20){
        message = 'Do you want to draw a new card?';
    } else if(sum === 21){
        message ="You've got BlackJack!";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}



//CASH OUT
