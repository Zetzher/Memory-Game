document.addEventListener('DOMContentLoaded', () => {

    //card options:

    const cardArray = [{
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

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    /

    //check for matches
    
    createBoard()


})