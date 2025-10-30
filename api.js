export async function getJoke() {
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