export function getCategoryIcon(category) {
    const path = "./assets/icons/"
    switch (category) {
        case "Programming":
            return path + "programming-icon.png"
        case "Misc":
            return path + "misc-icon.png"
        case "Dark":
            return path + "dark-icon.png"
        case "Pun":
            return path + "pun-icon.png"
        case "Spooky":
            return path + "spooky-icon.png"
        case "Christmas": 
            return path + "christmas-icon.png"
        default:
            return path + "misc-icon.png"
    }
}

export function createLoadingCard() {
    const loadingCard = document.createElement("div")
    loadingCard.classList.add("joke-card");

    const loadingImage = document.createElement("img");
    loadingImage.src = "./assets/images/sitting_dragon.png";
    loadingImage.alt = "Green cartoon dragon sitting and waiting."
    
    const loadingText = document.createElement("p");
    loadingText.textContent = "Loading joke..."
    loadingText.classList.add("loading-text");
    loadingCard.append(loadingImage, loadingText);

    return loadingCard;
}

