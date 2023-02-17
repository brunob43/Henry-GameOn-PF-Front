import white from './images/white.png'
import blank from './images/blank.png'
import js from "./images/js.png"
import css from './images/css3.png'
import html from './images/html5.png'
import git from './images/git.png'
import github from './images/github.png'
import node from './images/node.png'
import vsc from './images/vsc.png'
import npm from './images/npm.png'
import styles from './Memory.module.css'

const Memory = () =>{
  document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'javascript',
        img: js
      },
      {
        name: 'css',
        img: css
      },
      {
        name: 'html',
        img: html
      },
      {
        name: 'git',
        img: git
      },
      {
        name: 'github',
        img: github
      },
      {
        name: 'nodejs',
        img: node
      },
      {
        name: 'vsc',
        img: vsc
      },
      {
        name: 'npm',
        img: npm
      },
      {
        name: 'javascript',
        img: js
      },
      {
        name: 'css',
        img: css
      },
      {
        name: 'html',
        img: html
      },
      {
        name: 'git',
        img: git
      },
      {
        name: 'github',
        img: github
      },
      {
        name: 'nodejs',
        img: node
      },
      {
        name: 'vsc',
        img: vsc
      },
      {
        name: 'npm',
        img: npm
      },
    ]
      
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.getElementById('grid')
    const resultDisplay = document.querySelector('#result')
    const tryDisplay = document.querySelector('#try')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let tryArray = []
  
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
      if( cards.length !== 16){
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
        // alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        // alert('You found a match')
        cards[optionOneId].setAttribute('src', white)
        cards[optionTwoId].setAttribute('src', white)
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        tryArray.push(tryArray)
      } else {
        cards[optionOneId].setAttribute('src', blank)
        cards[optionTwoId].setAttribute('src', blank)
        tryArray.push(tryArray)

        // alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      tryDisplay.textContent = tryArray.length
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
    <div>
      <div>
        <button onClick={restart}>Start New Game</button>
        <button onClick={restart}>restart</button>
      </div>
      
      <div>
        <h3>Score: <span id="result"></span></h3>
        <h3>Try: <span id="try"></span></h3>
      </div>
      
      <div id="grid">
      </div>

    </div>        
  )

}

export default Memory