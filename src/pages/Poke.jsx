import '../css/poke.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Nav from '../component/Nav';
import { NavLink } from 'react-router-dom';
import { fetchPokemon } from '../help/pokemon';

function Poke() {
    const [isLoading, setIsLoading] = useState(false);
    const [pokeData, setPokedata] = useState([]);
    const [pagePokemon, setPagePokemon] = useState(1);
    const [searchTerm, setSearchTerm] = useState();
    const [filterType, setFilterType] = useState();

    useEffect(() => {

        const getPokemon = async (pagePokemon) => {
            setIsLoading(true)
            try {
                fetchPokemon(pagePokemon)
                    .then((pokemons) => {
                        setPokedata(pokemons);
                    })
                    .catch((err) => console.log("fetch pokemon err"))
            }
            catch {
                console.log("get pokemon error")
            }
        }
        getPokemon(pagePokemon);
        setIsLoading(false);
    }, [pagePokemon]);

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
                <div className='d-flex justify-content-between'>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon <= 1 ? 'disabled' : ''}`} type='button' onClick={() => { setPagePokemon(pagePokemon - 1); setIsLoading(true); }}>prev</button>
                    <button className={`btn bg-dark text-light m-3 ${pagePokemon > 20 ? 'disabled' : ''}`} onClick={() => (pokeData.length > 49) ? setPagePokemon(pagePokemon + 1) : setPagePokemon(pagePokemon)}>next</button>
                </div>

                <div className="row">
                    {pokeData.map((pokemon, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card bg-dark text-white position-relative">
                                <NavLink to={`/poke/${pokemon.id}`}>
                                    <img
                                        src={pokemon.picture}
                                        className="card-img"
                                        alt=''
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <div className="card-img-overlay">
                                        <p className="card-title fs-6" style={{ top: '0', left: '0', position: 'absolute', margin: '5px' }}>{pokemon.name}</p>
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


            </div>
        </>
    );
}


export default Poke;