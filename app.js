const board = document.querySelector('#board');
const colors = ['#79E1CD', '#86ACE1', '#8F7CC8', '#D7C19E', '#E1983F', '#A53CE1', '#C0E13A', '#11C8A7', '#E1AE2D' ]
const SQUARES_NUMBER = 5500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => 
  setColor(square))

  square.addEventListener('mouseleave', () => 
  removeColor(square))
  

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

