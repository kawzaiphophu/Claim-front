import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/poke.css';

const PokemonDetails = (selectedPokemon) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setCurrentId(parseInt(id, 10));
    }, [id]);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentId}`);
                setPokemonDetails(response.data);
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            }
        };

        if (currentId !== null) {
            fetchPokemonDetails();
        }
    }, [currentId]);

    const handlePrevClick = () => {
        if (currentId > 0) {
            const nextPokemonId = currentId - 1;
            window.location.href = `/pokemon/${nextPokemonId}`;
        }
    };

    const handleNextClick = () => {
        if (currentId < 1025) {
            const nextPokemonId = currentId + 1;
            window.location.href = `/pokemon/${nextPokemonId}`;
        }

    };

    return (
        <div>
            <div className='container pt-2 w-100 '>
                <div className='text-center pokemondiv container-fluid '>
                    <div className='d-flex justify-content-between pt-2 '>
                        <div className={`btn btn-dark fs-4 ${currentId <= 1 ? 'disabled' : ''}`} onClick={handlePrevClick}>Prev</div>
                        <div className={`btn btn-dark fs-4 ${currentId >= 1025 ? 'disabled' : ''}`} onClick={handleNextClick}>Next</div>
                    </div>
                    <h2 className='container pokeDetailDiv p-2 my-3'>{pokemonDetails?.name} #{pokemonDetails?.id}</h2>
                    <div className='img py-1'>
                        <img className='img-1' src="https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                        <img className='mx-auto img-2 d-flex align-items-center pb-5 ' src={pokemonDetails?.sprites?.other?.home?.front_default} alt={pokemonDetails?.name} />
                    </div>
                    <div className='d-flex fs-3 justify-content-center'>
                        {pokemonDetails?.types && (
                            <>
                                {pokemonDetails.types.map((type, index) => (
                                    <span className={`mx-1 px-3 ${type.type.name}`} key={index}>{type.type.name}</span>
                                ))}
                            </>
                        )}
                    </div>
                    <div className='pokeDetailDiv d-flex justify-content-between px-5 py-3 mt-3 w-100'>
                        <div className='d-flex flex-column'>
                        <h3 className='btn-light pokeDetailDiv px-2 w-100 my-2'>Info</h3>
                            <div className='fs-6 text-start'>weight : {pokemonDetails?.weight} </div>
                            <div className='fs-6 text-start'>height : {pokemonDetails?.height}</div>
                        </div>
                        <div className='d-flex flex-column w-50'>
                        <h3 className='btn-light pokeDetailDiv px-2 w-100 my-2'>Ability</h3>
                            {pokemonDetails?.abilities && (
                                <>
                                    {pokemonDetails.abilities.map((ability, index) => (
                                        <div key={index}>
                                            {ability.is_hidden ? (
                                                <>
                                                    <div className='fs-6 text-center'> {ability.ability.name}*</div>
                                                </>
                                            ) : (
                                                <div className='fs-6 text-center'>{ability.ability.name}</div>
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}

                        </div>
                    </div>
                    <div className='pokeDetailDiv d-flex justify-content-center p-3 my-3 w-100'>
                   
                    <div className='d-flex-column w-75' >
                        <h3 className='btn-light pokeDetailDiv px-3 my-3'>Status Pokemon</h3>
                            {pokemonDetails?.stats && (
                                <>
                                    {pokemonDetails.stats.map((stat, index) => (
                                        <div key={index} className='row fs-6 w-100'>
                                            <div className='col-9 text-start'>{stat.stat.name}</div>
                                            <div className='col text-end'>{stat.base_stat}</div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                    <div className='container pokeDetailDiv p-2'>
                        {pokemonDetails?.moves && (
                            <>
                                <div className='d-flex justify-content-between fs-3 px-auto my-3'>
                                    <span className='pokeDetailDiv px-3'>Move</span>
                                    <span className='pokeDetailDiv px-3 '>Learn At Level</span>
                                </div>
                                {pokemonDetails.moves
                                    .map(move => ({
                                        name: move.move.name,
                                        levelLearned: move.version_group_details.find(details => details.move_learn_method.name === "level-up")
                                    }))
                                    .filter(move => move.levelLearned)
                                    .sort((a, b) => a.levelLearned.level_learned_at - b.levelLearned.level_learned_at)
                                    .map((move, index) => (
                                        <div key={index} className='row fs-5 p-1 px-3'>
                                            <div className='col-9 text-start'>{move.name}</div>
                                            <div className='col text-center'>{move.levelLearned.level_learned_at}</div>
                                        </div>
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
