const deck = [];
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let playerHand = [];
let opponentHand = [];

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("draw-card").addEventListener("click", drawCard);

function createDeck() {
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function startGame() {
    createDeck();
    playerHand = [];
    opponentHand = [];
    dealCards();
    renderHands();
}

function dealCards() {
    for (let i = 0; i < 7; i++) {
        playerHand.push(deck.pop());
        opponentHand.push(deck.pop());
    }
}

function drawCard() {
    if (deck.length > 0) {
        playerHand.push(deck.pop());
        renderHands();
    } else {
        alert("No cards left in the deck!");
    }
}

function renderHands() {
    const playerHandDiv = document.getElementById("player-hand");
    const opponentHandDiv = document.getElementById("opponent-hand");

    playerHandDiv.innerHTML = '';
    opponentHandDiv.innerHTML = '';

    playerHand.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.textContent = `${card.rank} ${card.suit}`;
        playerHandDiv.appendChild(cardDiv);
    });

    opponentHand.forEach(() => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.textContent = "🂠";
        opponentHandDiv.appendChild(cardDiv);
    });
}