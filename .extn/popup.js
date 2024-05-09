document.addEventListener('DOMContentLoaded', function () {
    // Attach event listener to the refresh button
    document.getElementById('refreshButton').addEventListener('click', refreshJoke);

    // Fetch a joke when the page loads
    refreshJoke();
});

function refreshJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = jokeText;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = 'Failed to fetch joke. Please try again later.';
        });
}
