const cardArray = [  {    name: 'fries',    img: 'images/fries.png',  },  {    name: 'cheeseburger',    img: 'images/cheeseburger.png',  },  {    name: 'hotdog',    img: 'images/hotdog.png',  },  {    name: 'icecream',    img: 'images/ice-cream.png',  },  {    name: 'milkshake',    img: 'images/milkshake.png',  },  {    name: 'pizza',    img: 'images/pizza.png',  },  {    name: 'fries',    img: 'images/fries.png',  },  {    name: 'cheeseburger',    img: 'images/cheeseburger.png',  },  {    name: 'hotdog',    img: 'images/hotdog.png',  },  {    name: 'icecream',    img: 'images/ice-cream.png',  },  {    name: 'milkshake',    img: 'images/milkshake.png',  },  {    name: 'pizza',    img: 'images/pizza.png',  }];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }

  cardsChosen.length = 0;
  cardsChosenIds.length = 0;
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all!';
  }
  if (cardsWon.length === cardArray.length / 2) {
  checkWin();
    }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkWin() {
  if (cardsWon.length === cardArray.length / 2) {
    const congrats = document.createElement('div');
    congrats.classList.add('congrats');
    congrats.innerHTML = `
      <h1>Congratulations!</h1>
      <p>You found all the matches!</p>
    `;
    document.body.appendChild(congrats);

    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);
  }
}
