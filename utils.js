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