// Main script
import { getJokeByCategory } from "./api.js";

const categorySelect = document.querySelector("#jokeCategory");
const getJokeButton = document.querySelector("#getJokeButton");
getJokeButton.addEventListener("click", async (e) => {
    const data = await getJokeByCategory(categorySelect.value);
    const jokesArr = data.jokes;
    for (const joke of jokesArr) {
        const jokeCard = document.createElement("div");
        const jokeText = document.createElement("p");
        if (joke.joke) {
            jokeText.textContent = `${joke.joke}`;
        } else {
        jokeText.textContent = `${joke.setup} \n ${joke.delivery}`;
        }
        jokeCard.append(jokeText);
        document.body.appendChild(jokeCard);
    }
})