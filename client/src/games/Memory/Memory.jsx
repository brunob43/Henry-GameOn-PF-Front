import blank from './images/blank.png'
import fries from "./images/fries.png"
import cheeseburger from './images/cheeseburger.png'
import iceCream from './images/ice-cream.png'
import white from './images/white.png'
import pizza from './images/pizza.png'
import milkshake from './images/milkshake.png'
import hotdog from './images/hotdog.png'
import styles from './Memory.module.css'
import { useEffect } from 'react'

const Memory = () =>{
  document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: fries
      },
      {
        name: 'cheeseburger',
        img: cheeseburger
      },
      {
        name: 'ice-cream',
        img: iceCream
      },
      {
        name: 'pizza',
        img: pizza
      },
      {
        name: 'milkshake',
        img: milkshake
      },
      {
        name: 'hotdog',
        img: hotdog
      },
      {
        name: 'fries',
        img: fries
      },
      {
        name: 'cheeseburger',
        img: cheeseburger
      },
      {
        name: 'ice-cream',
        img: iceCream
      },
      {
        name: 'pizza',
        img: pizza
      },
      {
        name: 'milkshake',
        img: milkshake
      },
      {
        name: 'hotdog',
        img: hotdog
      }
    ]
      
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.getElementById('grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', blank)
        card.setAttribute('data-id', i)
        card.setAttribute('id', "cards")
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
      const cards = document.querySelectorAll('#cards')
      if( cards.length !== 12){
      window.location.reload();
      }
    }


    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('#cards')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if( cards.length=== 12){
        
      }

      if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', blank)
        cards[optionTwoId].setAttribute('src', blank)
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', white)
        cards[optionTwoId].setAttribute('src', white)
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', blank)
        cards[optionTwoId].setAttribute('src', blank)
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
        
    createBoard()
  })

  const restart= (event)=>{
    window.location.reload();
  };
      
  return(
    <div id="1">
      <button onClick={restart}>Start New Game</button>
      <h3>Score: <span id="result"></span></h3>

      <div id="grid">
      </div>

      <button onClick={restart}>restart</button>
    </div>        
  )

}

export default Memory