import axios from 'axios';

const fetchPokemon = async (page=1,selectapi="pokemon",find = "findAll",subsearch = "") => {
    try {
        const offset = (page - 1) * 24;
        const limit = 24;
        const apitype = (find === "findAll" ? `${selectapi}/?offset=${offset}&limit=${limit}/${subsearch}`: `${selectapi}/${find}/${subsearch}`);
        const response = await axios.get(`https://pokeapi.co/api/v2/${apitype}`);
        const pokemonArr = response.data.results;
        // https://pokeapi.co/api/v2/pokemon-species/1/
        
        const capitalizeName = (pokename) => {
            let words = pokename.split("-");

            for (let i = 0; i < words.length; i++){
                let word = words[i];

                if(word.length > 0) {
                    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
                }
            }

            return words.join("-").replace("-"," ");
        }
        const getPokemonData = async (pokemon) => {
            try{
                const match = pokemon.url.match(/\/(\d+)\/$/);
                const pokeId = match && match[1];
                
                if(Number(pokeId) > 10000){
                  return null;
                }
                const pokemonResponse = await axios.get(pokemon.url);
                const pokename = capitalizeName(pokemonResponse.data.name)
                pokemonResponse.data.name = pokename;
                return pokemonResponse
            }
            catch(error){
                return null
            }
        };

        const pokemonData = await Promise.all(pokemonArr.map(  async (pokemon) => {
            try {
                const data = await getPokemonData(pokemon);
                if(data == null){
                  return null
                }
                return data;
            } catch (error) {
                console.error(`Error fetching data for ${pokemon.name}: ${error}`);
                return null;
            }
        }));
  
         return {pokeData:pokemonData.filter((pokemon) => pokemon !== null),alllength:pokemonArr.length};
    } 
    
    catch (error) {
        console.error('Error fetching pokemon:', error);
    }
  }




export {fetchPokemon}