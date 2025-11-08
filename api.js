export async function getJokeByCategory(category, isSafe) {
    const url = isSafe ? `https://v2.jokeapi.dev/joke/${category}?safe-mode` 
        : `https://v2.jokeapi.dev/joke/${category}`
    try {
        const res = await fetch(url, {
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

export async function generateImage(prompt, timeout = 5000) {
    const fetchPromise = fetch(
        `https://image.pollinations.ai/prompt/A silly cartoon style pure image of ${encodeURIComponent(prompt)}`);
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("timeout")), timeout)
    );
    try {
        const res = await Promise.race([fetchPromise, timeoutPromise])
        if (!res.ok) return ("./assets/images/sitting_dragon_laugh.png");
        return res.url;
    }
    catch (err) {
        console.error(err);
        return ("./assets/images/sitting_dragon_laugh.png");
    }    
}
    


