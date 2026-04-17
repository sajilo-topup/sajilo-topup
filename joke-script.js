// joke-script.js

async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jokeData = await response.json();
        displayJoke(jokeData);
    } catch (error) {
        console.error('Error fetching joke:', error);
        displayError('Failed to fetch joke. Please try again later.');
    }
}

function displayJoke(jokeData) {
    const jokeContainer = document.getElementById('joke');
    if (jokeData.type === 'single') {
        jokeContainer.innerText = jokeData.joke;
    } else {
        jokeContainer.innerText = jokeData.setup + ' - ' + jokeData.delivery;
    }
}

function displayError(errorMessage) {
    const jokeContainer = document.getElementById('joke');
    jokeContainer.innerText = errorMessage;
}

// Fetch a joke when the page loads
window.onload = fetchJoke;