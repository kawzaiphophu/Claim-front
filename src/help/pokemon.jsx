import axios from 'axios';

const fetchPokemon = async (page) => {
    try {
        const offset = (page - 1) * 50;
        const limit = 50;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
        const pokemonArr = response.data.results;
        const getPokemonData = async (pokemon) => {
            try {
                const match = pokemon.url.match(/\/(\d+)\/$/);
                const pokeId = match && match[1];
                if (Number(pokeId) > 10000) {
                    return null;
                }
                const pokemonResponse = await axios.get(pokemon.url);

                //detail pokemon
                return {
                    name: pokemonResponse.data.name,
                    stats: pokemonResponse.data.stats,
                    types: pokemonResponse.data.types,
                    abilities: pokemonResponse.data.abilities,
                    id: pokemonResponse.data.id,
                    picture: pokemonResponse.data.sprites.front_default
                };
            }
            catch (error) {
                return null
            }
        };
        const pokemonData = await Promise.all(pokemonArr.map(async (pokemon) => {
            try {
                const data = await getPokemonData(pokemon);
                if (data == null) {
                    return null
                }
                return data;
            } catch (error) {
                console.error(`Error fetching data for ${pokemon.name}: ${error}`);
                return null;
            }
        }));

        return pokemonData.filter((pokemon) => pokemon !== null);
    }
    catch (error) {
        console.error('Error fetching pokemon:', error);
    }
}




export { fetchPokemon }