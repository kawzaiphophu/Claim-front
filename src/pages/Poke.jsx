import '../css/poke.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Nav from '../component/Nav';
import { NavLink  } from 'react-router-dom';

function Poke() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');

//fetch
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const promises = [];
                const startId = (currentPage - 1) * 100 + 1;
                const endId = currentPage * 100;
                for (let i = startId; i <= endId; i++) {
                    promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
                }
                const responses = await Promise.all(promises);
                const pokemonData = responses.map(response => response.data);
                setData(pokemonData);
                setError(null);
                setIsLoading(true)
            } catch (error) {
                setError('unknown-error');
            }
            setIsLoading(false);
        };
    
        fetchData();
    }, [currentPage]);
//filter and search
    useEffect(() => {
        filterAndSearch();
    }, );

    const filterAndSearch = () => {
        let filtered = [...data];
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


    //page
    const nextPage = () => {
        const nextPageNum = currentPage + 1;
        setCurrentPage(nextPageNum);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                        {/* Add more options for other types */}
                    </select>
                </div>
                {isLoading && <Loading />}
                <div className="my-3 d-flex justify-content-between">
                    <button className="btn btn-primary me-2" onClick={prevPage}>Previous Page</button>
                    <button className="btn btn-primary" onClick={nextPage}>Next Page</button>
                </div>
                {!isLoading && !error && filteredData.length > 0 && (
                    <div className="row">
                        {filteredData.map((pokemon, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <div className="card bg-dark text-white position-relative">
                                    <NavLink to={`/poke/${pokemon.id}`}>
                                        <img
                                            src={pokemon.sprites.front_default}
                                            className="card-img"
                                            alt="..."
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
