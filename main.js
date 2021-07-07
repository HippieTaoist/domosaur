// Promblem 1
const messMeSpan = document.querySelector('span.mess-with-me')
messMeSpan.style.fontSize = '40px'

// Problem 2
const messMeP = document.querySelector('p')
messMeP.style.backgroundColor = 'green'

// Problem 3
const hideMe2D = document.querySelector('#hide-me')
hideMe2D.style.visibility = 'none'

// Problem 4
const triDino = document.querySelector('#triceratops')
triDino.style.width = '324px'

// EVENT LISTENER PROBLEMS


// Problem 1
const messMeOrange = document.querySelector('.mess-with-me')
messMeOrange.addEventListener('click', function() {
    messMeOrange.style.backgroundColor = 'orange'
})

// Problem 2
triDino.addEventListener('click', function() {
    triDino.style.border = 'red 1px solid'
})

// Problem 3
const feathDino = document.querySelector('#feathers')
feathDino.addEventListener('click', function() {
    feathDino.style.opacity = '50%'
})

// Problem 4
const switchButton = document.querySelector('#toggle')
const colorChange = document.querySelector('#row')
switchButton.addEventListener('click', function() {
    if (colorChange.style.backgroundColor === 'red') {
        colorChange.style.backgroundColor = 'white'
    } else { colorChange.style.backgroundColor = 'red' }

})

// Problem 5
const biggerDigger = document.querySelector('#biggify')
biggerDigger.addEventListener('mouseover', function() {
    biggerDigger.style.width = '200px'
})
biggerDigger.addEventListener('mouseout', function() {
        biggerDigger.style.width = '162px'
    })
    // Stretch Goals
    // white to red to white worked, but now the dino is back.