// Main script
import { getJokeByCategory, generateImage } from "./api.js";
import { getCategoryIcon, createLoadingCard } from "./utils.js";

const categorySelect = document.querySelector("#jokeCategory");
const getJokeButton = document.querySelector("#getJokeButton");
const jokeContainer = document.querySelector("#jokeContainer");
let loading = null;

getJokeButton.addEventListener("click", async (e) => {
    loading = true;
    jokeContainer.replaceChildren();
    jokeContainer.append(createLoadingCard());

    const data = await getJokeByCategory(categorySelect.value);

    const jokeCard = document.createElement("div");
    jokeCard.classList.add("joke-card");

    const jokeHeader = document.createElement("div");
    const jokeCategory = document.createElement("h3");
    const jokeIcon = document.createElement("img");
    const imageElement = document.createElement("img");
    const jokeText = document.createElement("p");

    jokeIcon.src = getCategoryIcon(data.category);
    jokeCategory.append(jokeIcon);
    jokeCategory.textContent = `${data.category}`;
    jokeHeader.append(jokeIcon, jokeCategory);
    jokeHeader.classList.add("joke-card-header");
    jokeCard.append(jokeHeader);
    
    if (data.joke) {
        jokeText.textContent = `${data.joke}`;
        imageElement.src = await generateImage(`${data.joke}`);
    } else {
        jokeText.textContent = `${data.setup} \n ${data.delivery}`;
        imageElement.src = await generateImage(`${data.setup} ${data.delivery}`);
    }
    loading = false;
    jokeCard.append(jokeText);
    jokeCard.append(imageElement);
    if (!loading) {
        jokeContainer.replaceChildren();
        jokeContainer.append(jokeCard);
    }
})

