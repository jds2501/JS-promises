
function getNumbersURL(number, type) {
    return `http://numbersapi.com/${number}/${type}?json`;
}

const fourResult = await fetch(getNumbersURL(4, "trivia"));
const fourResultJSON = await fourResult.json();
console.log(fourResultJSON["text"]);

const oneThreeResult = await fetch(getNumbersURL("1..3", "trivia"));
const oneThreeResultJSON = await oneThreeResult.json();
console.log(oneThreeResultJSON["1"]);
console.log(oneThreeResultJSON["2"]);
console.log(oneThreeResultJSON["3"]);

const fourFacts = [];

for (let i = 0; i < 4; i++) {
    const fact = await fetch(getNumbersURL(10, "trivia"));
    fourFacts.push((await fact.json())["text"]);
}

for (const fact of fourFacts) {
    console.log(fact);
}