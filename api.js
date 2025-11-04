export async function getAnyJoke() {
    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function getJokeByCategory(category) {
    try {
        const res = await fetch(`https://v2.jokeapi.dev/joke/${category}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function generateImage(prompt) { 
    try {
        const res = await fetch(`https://image.pollinations.ai/prompt/A silly cartoon style pure image of ${encodeURIComponent(prompt)}`);
        if (!res.ok) return ("./assets/images/sitting_dragon_laugh.png");
        return res.url;
    }
    catch (err) {
        console.error(err);
        return ("./assets/images/siiting_dragon_laugh.png");
    }    
}
    


