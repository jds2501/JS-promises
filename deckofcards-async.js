const SHUFFLE = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

function drawCard(deck_id) {
    return `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
}

const firstDeck = await fetch(SHUFFLE);
const firstDeckJSON = await firstDeck.json();
const drawFromFirstDeck = await fetch(drawCard(firstDeckJSON["deck_id"]));
const drawfromFirstDeckJSON = await drawFromFirstDeck.json();
const firstDeckCard = drawfromFirstDeckJSON["cards"][0];
console.log(firstDeckCard["value"] + " of " + firstDeckCard["suit"]);

let cards = []
const secondDeck = await fetch(SHUFFLE);
const secondDeckJSON = await secondDeck.json();
const drawFromSecondDeck = await fetch(drawCard(secondDeckJSON["deck_id"]));
const drawfromSecondDeckJSON = await drawFromSecondDeck.json();
cards.push(drawfromSecondDeckJSON["cards"][0]);

const drawSecondFromSecondDeck = await fetch(drawCard(secondDeckJSON["deck_id"]));
const drawSecondFromSecondDeckJSON = await drawSecondFromSecondDeck.json();
cards.push(drawSecondFromSecondDeckJSON["cards"][0])

for (const card of cards) {
    console.log(card["value"] + " of " + card["suit"]);
}