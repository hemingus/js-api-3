// Main script
import { getJokeByCategory, generateImage } from "./api.js";
import { getCategoryIcon } from "./utils.js";

const categorySelect = document.querySelector("#jokeCategory");
const getJokeButton = document.querySelector("#getJokeButton");
const jokeContainer = document.querySelector("#jokeContainer");

getJokeButton.addEventListener("click", async (e) => {
    const data = await getJokeByCategory(categorySelect.value);

    const jokeCard = document.createElement("div");
    jokeCard.classList.add("joke-card");
    const jokeHeader = document.createElement("div");
    const jokeCategory = document.createElement("h3");
    const jokeIcon = document.createElement("img");
    jokeIcon.src = getCategoryIcon(data.category);
    jokeCategory.append(jokeIcon);
    jokeCategory.textContent = `${data.category}`;
    jokeHeader.append(jokeIcon, jokeCategory);
    jokeHeader.classList.add("joke-card-header");
    jokeCard.append(jokeHeader);
    const imageElement = document.createElement("img");
    
    const jokeText = document.createElement("p");
    if (data.joke) {
        jokeText.textContent = `${data.joke}`;
        imageElement.src = await generateImage(`${data.joke}`);
    } else {
        jokeText.textContent = `${data.setup} \n ${data.delivery}`;
        imageElement.src = await generateImage(`${data.setup} ${data.delivery}`);
    }
    jokeCard.append(jokeText);
    jokeCard.append(imageElement);
    jokeContainer.append(jokeCard);
})

