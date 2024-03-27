const fs = require("fs");
const axios = require("axios");

const fetchPokemon = async () => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025`
    );
    const pokemonArr = response.data.results;

    const pokemonDataJson = [];

    const getPokemonData = async (pokemon) => {
      try {
        const pokemonResponse = await axios.get(pokemon.url);
        return pokemonResponse.data; // Return the data directly
      } catch (error) {
        console.error(`Error fetching data for ${pokemon.name}: ${error}`);
        return null;
      }
    };

    // Use map to create an array of promises
    const promises = pokemonArr.map(async (pokemon) => {
      try {
        const data = await getPokemonData(pokemon);
        return { id: data.id, name: data.name };
      } catch (error) {
        return null;
      }
    });

    // Wait for all promises to resolve
    const pokemonData = await Promise.all(promises);

    const jsonData = JSON.stringify(pokemonData.filter(Boolean), null, 2); // Filter out null values

    fs.writeFile("./json/pokemonlist.json", jsonData, (err) => {
      if (err) throw err;
      console.log("File created successfully!");
    });
  } catch (error) {
    console.error("Error fetching pokemon:", error);
  }
};

fetchPokemon();
