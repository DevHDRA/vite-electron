export async function getCharacters() {
    // GET request using fetch with async/await
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data
}
