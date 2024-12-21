const SHUFFLE = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

function drawCard(deck_id) {
    return `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
}

fetch(SHUFFLE)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        return fetch(drawCard(data["deck_id"]));
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        const card = data["cards"][0];
        console.log(card["value"] + " of " + card["suit"]);
    }).catch(error => {
        console.error(error);
    });

let cards = []

fetch(SHUFFLE)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        return fetch(drawCard(data["deck_id"]));
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        cards.push(data["cards"][0]);
        return fetch(drawCard(data["deck_id"]));
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        cards.push(data["cards"][0]);

        for (const card of cards) {
            console.log(card["value"] + " of " + card["suit"]);
        }
    }).catch(error => {
        console.error(error);
    });