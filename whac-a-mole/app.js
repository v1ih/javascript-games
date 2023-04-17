const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-button')

let result = 0 
let hitPosition
let currentTime = null
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id 
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
        result++
        score.textContent = result 
        hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

startButton.addEventListener('click', () => {
    currentTime = 60
    timeLeft.textContent = currentTime
    moveMole()
    let countDownTimerId = setInterval(countDown, 1000)

    function countDown() {
        currentTime--
        timeLeft.textContent = currentTime

        if (currentTime == 0) {
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert('GAME OVER! Your final scores is ' + result)
        }
    }
})
