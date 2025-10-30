// Main script
import { getJokeByCategory } from "./api.js";

const categorySelect = document.querySelector("#jokeCategory");
const getJokeButton = document.querySelector("#getJokeButton");
const jokeContainer = document.querySelector("#jokeContainer");

getJokeButton.addEventListener("click", async (e) => {
    const data = await getJokeByCategory(categorySelect.value);
    const jokesArr = data.jokes;
    for (const joke of jokesArr) {
        const jokeCard = document.createElement("div");
        jokeCard.classList.add("joke-card");
        const jokeCategory = document.createElement("h3");
        jokeCategory.textContent = joke.category;
        jokeCard.append(jokeCategory);
        
        const jokeText = document.createElement("p");
        if (joke.joke) {
            jokeText.textContent = `${joke.joke}`;
        } else {
        jokeText.textContent = `${joke.setup} \n ${joke.delivery}`;
        }
        jokeCard.append(jokeText);
        jokeContainer.append(jokeCard);
    }
})