
function getNumbersURL(number, type) {
    return `http://numbersapi.com/${number}/${type}?json`;
}

fetch(getNumbersURL(4, "trivia"))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        console.log(data["text"]);
    }).catch(error => {
        console.error(error);
    });

fetch(getNumbersURL("1..3", "trivia"))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        console.log(data["1"]);
        console.log(data["2"]);
        console.log(data["3"]);
    }).catch(error => {
        console.error(error);
    });

const promises = [];

for (let i = 0; i < 4; i++) {
    promises.push(fetch(getNumbersURL(10, "trivia")));
}

Promise.all(promises).then((values) => {
    const valuePromises = [];

    for (const value of values) {
        valuePromises.push(value.json());
    }

    return Promise.all(valuePromises);
}).then((values) => {
    for (const value of values) {
        console.log(value["text"]);
    }
}).catch(error => {
    console.error(error);
});