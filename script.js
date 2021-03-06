let cardArray = []
let cardFirst
let cardSecond

const cardsAll = document.querySelectorAll('.a_card')

console.log(cardsAll)

function flipCard(card) {
  card.classList.toggle('flip')
}

cardsAll.forEach((card, index) =>
  card.addEventListener('click', () => {
    if (card.classList.contains('finished')) {
    } else {
      flipCard(card)
      console.log(card.getAttribute('value'))
      console.log(cardArray)
      cardMatches(card)
    }
  })
)
console.log(flipCard)

///////matching cards///////

const freezeCards = (card) => {
  card.classList.add('finished')
  console.log('card', card)
}

const cardMatches = (card) => {
  if (!cardFirst) {
    console.log('first card clicked')
    cardFirst = card
  } else {
    cardSecond = card
    console.log('second card clicked')
    if (cardFirst.getAttribute('value') === cardSecond.getAttribute('value')) {
      console.log('Match')
      freezeCards(cardFirst)
      freezeCards(cardSecond) // cards must stay opened if match
      cardFirst = null // reset// we are not comparing any cards
      cardSecond = null
    } else {
      // cards must flip back if not match
      console.log('Cards are not matched')
      setTimeout(function () {
        flipCard(cardFirst)
        cardFirst = null
      }, 1000)
      setTimeout(function () {
        flipCard(cardSecond)
        cardSecond = null
      }, 1250)
    }
  }
}

/////shuffling cards/////

shuffleCard = () => {
  cardsAll.forEach((card) => {
    let random = Math.floor(Math.random() * 12)
    card.style.order = random
  })
}
shuffleCard()
