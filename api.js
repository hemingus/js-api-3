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
        const res = await fetch(`https://v2.jokeapi.dev/joke/${category}?amount=11`, {
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