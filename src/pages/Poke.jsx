import '../css/poke.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchPokemon, listPokemonSearch } from '../help/pokemon';
import { pokemonType } from '../data/pokemonType'

function Poke() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokeData, setPokedata] = useState([]);
    const [pagePokemon, setPagePokemon] = useState(1);
    const [searchTerm, setSearchTerm] = useState();
    const [filterType, setFilterType] = useState(0);

    const getPokemon = async (pagePokemon) => {
        try {
            setIsLoading(true);
            const pokemons = await fetchPokemon(pagePokemon);
            setPokedata(pokemons.pokeData);
            setIsLoading(false);
        } catch (err) {
            console.log("fetch pokemon err", err);
        }
    };
    
    useEffect(() => {
        try {
            getPokemon(pagePokemon);
        } catch (error) {
            console.log("Error fetching Pokémon by type:", error);
        } 
    }, [pagePokemon]);

    const searchByType = async (filterType) => {
        try {
            if (filterType >= 1) {
                setIsLoading(true);
                const pokemons = await fetchPokemon(1, "type", filterType);
                setPokedata(pokemons.pokeData)
                setIsLoading(false);
            } else {
                setIsLoading(true);
                getPokemon(pagePokemon)

            }
        } catch (error) {
            console.log("fetch pokeType err", error);
        }
    }
    const searchByName = async (x) => {
        if (searchTerm != null) {
            try {
                setIsLoading(true);
                const data = await listPokemonSearch(x)
                setPokedata(data)
                setIsLoading(false);
            } catch (error) {
                console.log("fetch pokeType err", error);
            }
        }
    }
    return (
        <>
            <div className='container w-100 h-100 py-5 my-5 pokemondiv'>
                <div className='btn d-flex justify-content-center' style={{ textAlign: 'center' }} onClick={() => {setPagePokemon(1);searchByType();setFilterType(0)}}>
                    <h1>Pokémon</h1>
                </div>
                <div className="my-3 d-flex justify-content-between">
                    <div className="input-group ">
                        <input type="text"
                            className="form-control"
                            placeholder="Search Pokémon By Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-dark me-2 w-25"
                            type="button" id="button-addon2"
                            onClick={() => searchByName(searchTerm)}>go</button>
                    </div>
                    <select
                        className="form-select"
                        value={filterType}
                        onChange={(e) => { setIsLoading(true); setFilterType(e.target.value); searchByType(e.target.value) }}>
                        {pokemonType.map((type, index) => {
                            return <option value={type.id} key={index}>{type.name}</option>
                        })}
                    </select>
                </div>
                <div className={`d-flex justify-content-between ${Number(filterType) > 0 ? 'd-none' : 'd-flex'}`}>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon <= 1 ? 'disabled' : ''}`} type='button' onClick={() => { setIsLoading(true); setPagePokemon(pagePokemon - 1); }}>prev</button>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon >= 43 ? 'disabled' : ''}`} type='button' onClick={() => { setIsLoading(true); setPagePokemon(pagePokemon + 1); }}>next</button>
                </div>
                <div className="row">
                    {isLoading ? (
                        <>
                        {[...Array(24)].map((_, index) => (
                            <div key={index} className='col-6 col-sm-6 col-md-4 col-lg-3 mb-4 '>
                                <div className="card loading">
                                    <div className="card-body" style={{ height: "200px" }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                    ) : (
                        pokeData.map((pokemon, index) => (
                            <div key={pokemon.data.id} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="card-pokemon bg-dark text-white position-relative" style={{ minHeight: "200px" }}>
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