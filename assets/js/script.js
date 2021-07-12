//run game
function runGame() {
}


//shuffle card


//flip card function
const cards = document.querySelectorAll('.card-area');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.dataset.match);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))


//total turns
function totalTurns() {

}



//time
function timeRemainig() {

}



//result
function winOrLose() {

}