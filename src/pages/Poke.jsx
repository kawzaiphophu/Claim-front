import '../css/poke.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Nav from '../component/Nav';
import { NavLink } from 'react-router-dom';

function Poke() {
    const [pokeData, setPokeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filteredData, setFilteredData] = useState([]);


    //get all pokemon
    const pokeFun = async () => {
        setIsLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setIsLoading(false)
    }
    //get a pokemon
    const getPokemon = async (res) => {
        res.forEach(async (item) => {
            const result = await axios.get(item.url);
setPokeData(state => {
    const isDuplicate = state.some(data => data.id === result.data.id);
    if (!isDuplicate) {
        const newState = [...state, result.data];
        newState.sort((a, b) => a.id - b.id);
        return newState;
    } else {
        return state;
    }
});
            
            
        });
    };
    const filterAndSearch = () => {
        let filtered = [...pokeData];
        // Filter by type
        if (filterType) {
            filtered = filtered.filter(pokemon =>
                pokemon.types.some(type => type.type.name === filterType)
            );
        }
        // Search by name
        if (searchTerm) {
            filtered = filtered.filter(pokemon =>
                pokemon.species.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredData(filtered);
    };
    useEffect(() => {
        filterAndSearch();
    }, [searchTerm]);
    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
            <Nav />
            <div className='container bg-light w-75 h-100 py-5 my-5'>
                <h1 className='d-flex justify-content-center'> Pokémon</h1>
                <div className="my-3 d-flex justify-content-between">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="form-select"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                    </select>
                </div>
                {isLoading && <Loading />}
                <div className="my-3 d-flex justify-content-between">
                     <button className={`btn bg-dark text-light ${prevUrl === null ? 'disabled' : ''}`} onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>
                   <button className='btn bg-dark text-light' onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl) 
                            console.log(nextUrl);
                        }}>Next</button>
                </div>
               
                {!isLoading && (
                    <div className="row">
                        {pokeData.map((pokemon, index) => (
                            <div key={index} className="col-md-2 mb-4">
                                <div className="card bg-dark text-white position-relative">
                                    <NavLink to={`/poke/${pokemon.id}`}>
                                        <img
                                            src={pokemon.sprites.front_default}
                                            className="card-img"
                                            alt=''
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="card-img-overlay">
                                            <p className="card-title fs-6" style={{ top: '0', left: '0', position: 'absolute', margin: '5px' }}>{pokemon.species.name}</p>
                                            <p className="card-title fs-10" style={{ top: '0', right: '0', position: 'absolute', margin: '5px' }}>ID: {pokemon.id}</p>
                                            <p className="card-text fs-10 w-100 position-absolute" style={{ bottom: '0', left: '0', margin: '5px' }}>
                                                {pokemon.types && (
                                                    <>
                                                        {pokemon.types.map((type, index) => (
                                                            <span key={index}>    {type.type.name}</span>
                                                        ))}
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                )}

            </div>
        </>
    );
}

export default Poke;

// const Pokemon = {
//     /** 
//     * @param pageID type number;
//     * ! respond pokemondata [..{stats , types , abilities , id}]
//     */ 
//     fetchPokemon: async (page) => {
//         try {
//             const offset = page;
//             const limit = page == 11 ? 25 : page * 100;
//             const setPokemon = await axios.get(
//                ` https://pokeapi.co/api/v2/pokemon/?offset${offset}&limit${limit}`
//             );
//             const pokemonArr = setPokemon.results;
    
//             const managePokemon = (pokemons) => {
//                 const currentPokemonArr = [];
    
//                 pokemons.forEach( async (pokemon) => {
//                     const pokeUrl = pokemon.url;
        
//                     const match = pokeUrl.math(/\/(\d+)\/$/);
//                     const pokemonIndex = match && match[1];
//                     if(pokemonIndex > 10000){
//                         return;
//                     };
        
//                     const selectpokemon = await axios.get(pokeUrl);
//                     currentPokemonArr.push([{stats:selectpokemon.stats,types:selectpokemon.types,abilities:selectpokemon.abilities,id:selectpokemon.id}]);
//                 });
    
//                 return currentPokemonArr;
//             };
    
//                 managePokemon(pokemonArr);
//             } 
//         catch(err) {
//             console.error(err);
//         }
//     },


//     /** 
//     * @param pageID type number;
//     * ! respond pokemondata [{stats , types , abilities , id}]
//     */ 
//     findOnePokemon: async (pokemonID)=>{
//         const Pokemon = await axios.get(
//             `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`
//         );

//         return Pokemon; 
//     },

//     prevPokemon: async (pokemonID)=>{
//         const toPokemon = pokemonID-1;
//         const Pokemon = await axios.get(
//             `https://pokeapi.co/api/v2/pokemon/${toPokemon}/`
//         );

//         return Pokemon; 
//     },


//     /** 
//     * @param pageID type number;
//     * ! respond pokemondata [{stats , types , abilities , id}]
//     * TODO : if check before method
//     * ? if(toPokemon < 10000){ Pokemon.netxPokemon(pageID) };
//     */ 
//     nextPokemon: async (pokemonID)=>{
//         const toPokemon = pokemonID+1;
//         if(toPokemon > 10000){
//             return;
//         };
//         const fetchPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${toPokemon}/`);
//         const Pokemon = [{stats:fetchPokemon.stats,types:fetchPokemon.types,abilities:fetchPokemon.abilities,id:fetchPokemon.id}]
//         return Pokemon; 
//     },


// }

