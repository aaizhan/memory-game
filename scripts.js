
const cards = document.querySelectorAll('.memory-card');

 let hasFlippedCard=false;
 let lockBoard=false;
 let firstCard, secondCard;

function flipCard() {
  if(lockBoard) return;
  this.classList.add('flip');

  if (!hasFlippedCard){
    //first click
    hasFlippedCard=true;
    firstCard=this;

    return;
  }
  //second click
  hasFlippedCard=false
  secondCard =this;
  //do cards match
  checkForMatch();

}

function checkForMatch(){
  let isMatch= firstCard.dataset.framework ===
    secondCard.dataset.framework;

    isMatch ? disableCards(): unflipCadrs();

}
function disableCards() {
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();

}

function unflipCadrs() {
  lockBoard=true;
  setTimeout(()=>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard=false;
  },1500);

}
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false,false];
  [firstCard,secondCard]= [null,null];
}


(function shuffle(){
  cards.forEach(card=>{
    //generate a random number, from 1 to 12
    card.style.order = Math.floor(Math.random()*12);
  })
})();



cards.forEach(card => card.addEventListener('click', flipCard));
