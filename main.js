// Main script
import { getJoke } from "./api.js";


const getJokeButton = document.querySelector("#getJokeButton");
getJokeButton.addEventListener("click", async (e) => {
    const jokeCard = document.createElement("div");
    const jokeText = document.createElement("p");

    const joke = await getJoke();
    if (joke.joke) {
        jokeText.textContent = `${joke.joke}`;
    } else {
        jokeText.textContent = `${joke.setup} \n ${joke.delivery}`;
    }
    jokeCard.append(jokeText);
    document.body.appendChild(jokeCard);
})