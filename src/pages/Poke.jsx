import '../css/poke.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchPokemon } from '../help/pokemon';
import axios from 'axios';
function Poke() {
    const [isLoading, setIsLoading] = useState(false);
    const [pokeData, setPokedata] = useState([]);
    const [pagePokemon, setPagePokemon] = useState(1);
    const [searchTerm, setSearchTerm] = useState();
    const [filterType, setFilterType] = useState(0);
    const [pokeFilterType, setPokeFilterType] = useState();


    useEffect(() => {
        const getPokemonByType = async () => {
            try {
                if (filterType >= 1) {
                    setIsLoading(true);
                    try {
                        const response = await axios.get(`https://pokeapi.co/api/v2/type/${filterType}`);
                        const pokemonByType = response.data.pokemon;
                        const pokemonData = await Promise.all(pokemonByType.map(async (pokemon) => {
                            const match = pokemon.pokemon.url.match(/\/(\d+)\/$/);
                            const pokeId = match && parseInt(match[1]); 
                            if (pokeId >= 1 && pokeId <= 1025) { 
                                try {
                                    const data = await axios.get(pokemon.pokemon.url);
                                    return data;
                                } catch (error) {
                                    console.error(`Error fetching data for ${pokemon.name}: ${error}`);
                                    return null;
                                }
                            } else {
                                return null;
                            }
                        }));
                        setPokeFilterType(pokemonData.filter(data => data !== null));
                    } catch (error) {
                        console.error(`Error fetching Pokémon data: ${error}`);
                    } finally {
                        setIsLoading(false);
                    }
                } else {
                    setIsLoading(true);
                    const getPokemon = async (pagePokemon) => {
                        try {
                            const pokemons = await fetchPokemon(pagePokemon);
                            setPokedata(pokemons.pokeData);
                        } catch (err) {
                            console.log("fetch pokemon err", err);
                        }
                    };

                    getPokemon(pagePokemon)
                        .then(() => setIsLoading(false))
                        .catch(() => setIsLoading(true));
                }
            } catch (error) {
                console.log("Error fetching Pokémon by type:", error);
            }
        };
        getPokemonByType();
    }, [filterType, pagePokemon]);


    let flattenedArray = [];
    if (pokeFilterType) {
        flattenedArray = pokeFilterType.reduce((acc, curr) => acc.concat(curr), []);
    }
    const displayedPokemon = filterType ? flattenedArray : pokeData;
    return (
        <>

            <div className='container w-75 h-100 py-5 my-5 pokemondiv'>
                <h1 className='d-flex justify-content-center'> Pokémon</h1>
                <div className="my-3 d-flex justify-content-between">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => { setIsLoading(false); setSearchTerm(e.target.value); }}
                    />
                    <select
                        className="form-select"
                        value={filterType}
                        onChange={(e) => { setIsLoading(true); setFilterType(e.target.value); }}>
                        <option value="">All Types</option>
                        <option value="1">Normal</option>
                        <option value="10">Fire</option>
                        <option value="11">Water</option>
                        <option value="13">Electric</option>
                        <option value="12">Grass</option>
                        <option value="15">Ice</option>
                        <option value="2">Fighting</option>
                        <option value="4">Poison</option>
                        <option value="5">Groud</option>
                        <option value="3">Flying</option>
                        <option value="14">Psychic</option>
                        <option value="7">Bug</option>
                        <option value="6">Rock</option>
                        <option value="8">Ghost</option>
                        <option value="16">Dragon</option>
                        <option value="17">Dark</option>
                        <option value="9">Steel</option>
                        <option value="18">Fairy</option>
                    </select>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon <= 1 || filterType >= 1 ? 'disabled' : ''}`} type='button' onClick={() => { setIsLoading(true); setPagePokemon(pagePokemon - 1); }}>prev</button>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon >= 43 || filterType >= 1 ? 'disabled' : ''}`} onClick={() => { setIsLoading(true); setPagePokemon(pagePokemon + 1); }}>next</button>
                </div>
                <div className="row">
                    {isLoading ? (
                        displayedPokemon.map((pokemon, index) => (
                            <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 '>
                                <div className="card loading">
                                    <div className="card-body" style={{ height: "200px" }}>
                                        <h5 className="card-title"> </h5>
                                        <p className="card-text"> </p>
                                        <p className="card-text"> <small className="text-muted"></small></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        displayedPokemon.map((pokemon, index) => (
                            <div key={pokemon.data.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="card bg-dark text-white position-relative" style={{ minHeight: "200px" }}>
                                    <NavLink to={`/pokemon/${pokemon.data.id}`}>
                                        <img
                                            src={pokemon.data.sprites.front_default}
                                            className="card-img"
                                            alt=''
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="card-img-overlay">
                                            <p className="card-title fs-6" style={{ top: '0', left: '0', position: 'absolute', margin: '5px' }}>{pokemon.data.name}</p>
                                            <p className="card-title fs-10" style={{ bottom: '0', right: '0', position: 'absolute', margin: '5px' }}>ID: {pokemon.data.id}</p>
                                            <p className="card-text fs-10 w-100 position-absolute" style={{ bottom: '0', left: '0', margin: '5px' }}>
                                                {pokemon.data.types && (
                                                    <>
                                                        {pokemon.data.types.map((type, index) => (
                                                            <span key={index}>    {type.type.name}</span>
                                                        ))}
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    )
                    }


                </div>
            </div>
        </>
    );
}


export default Poke;