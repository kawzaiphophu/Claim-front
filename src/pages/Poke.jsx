import '../css/poke.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchPokemon } from '../help/pokemon';
function Poke() {
    const [isLoading, setIsLoading] = useState(false);
    const [pokeData, setPokedata] = useState([]);
    const [pagePokemon, setPagePokemon] = useState(1);
    const [searchTerm, setSearchTerm] = useState();
    const [filterType, setFilterType] = useState();


    useEffect(() => {
        setIsLoading(true);
    
        const getPokemon = async (pagePokemon) => {
            try {
                const pokemons = await fetchPokemon(pagePokemon);
                setPokedata(pokemons.pokeData);
                console.log(pokemons.pokeData);
            } catch (err) {
                console.log("fetch pokemon err", err);
            }
        };
    
        getPokemon(pagePokemon)
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    
    }, [pagePokemon]);


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
                <div className='d-flex justify-content-between'>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon <= 1 ? 'disabled' : ''}`} type='button' onClick={() => { setIsLoading(true); setPagePokemon(pagePokemon - 1); }}>prev</button>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon > 42 ? 'disabled' : ''}`} onClick={() => { setIsLoading(true); setPagePokemon(pagePokemon + 1); }}>next</button>
                </div>

                <div className="row">
                    {isLoading ? (
                        pokeData.map((pokemon, index) => (
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
                        pokeData.map((pokemon, index) => (
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
                                            <p className="card-title fs-10" style={{ top: '0', right: '0', position: 'absolute', margin: '5px' }}>ID: {pokemon.data.id}</p>
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
                    )}

                </div>
            </div>
        </>
    );
}


export default Poke;