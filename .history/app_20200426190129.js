document.addEventListener('DOMContentLoaded', () => {

    //card options:

    const cardArrays = [{
            name: "cheeseburguer",
            img: 'images/cheeseburger.png'
        },
        {
            name: "cheeseburguer",
            img: 'images/cheeseburger.png'
        },
        {
            name: "fries",
            img: 'images/fries.png'
        },
        {
            name: "fries",
            img: 'images/fries.png'
        },
        {
            name: "hotdog",
            img: 'images/hotdog.png'
        },
        {
            name: "hotdog",
            img: 'images/hotdog.png'
        },
        {
            name: "ice-cream",
            img: 'images/ice-cream.png'
        },
        {
            name: "ice-cream",
            img: 'images/ice-cream.png'
        },
        {
            name: "milkshake",
            img: 'images/milkshake.png'
        },
        {
            name: "milkshake",
            img: 'images/milkshake.png'
        },
        {
            name: "pizza",
            img: 'images/pizza.png'
        },
        {
            name: "pizza",
            img: 'images/pizza.png'
        },
    ]

    const grid = document.querySelector('.grid')

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArrays.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', './images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardarray);
    }

    //check for matches

    createBoard()


})