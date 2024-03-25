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
            <div className='container pt-5 mt-5' style={{ height: '100vh' }}>
                <div className='text-center pokemondiv container-fluid '>
                    <div className='d-flex justify-content-between p-3 '>
                        <div className={`btn btn-dark fs-4 ${currentId <= 1 ? 'disabled' : ''}`} onClick={handlePrevClick}>Prev</div>
                        <div className={`btn btn-dark fs-4 ${currentId >= 1025 ? 'disabled' : ''}`} onClick={handleNextClick}>Next</div>
                    </div>
                    <h1 className=''>{pokemonDetails?.name} #{pokemonDetails?.id}</h1>
                    <div className='img py-5'>
                        <img className='img-1' src="https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                        <img className='mx-auto img-2 d-flex align-items-center pb-5 ' src={pokemonDetails?.sprites?.other?.home?.front_default} alt={pokemonDetails?.name} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column fs-3  w-50'>
                            <div className='d-flex justify-content-start '>weight : {pokemonDetails?.weight}  </div>
                            <div className='d-flex justify-content-start '>height : {pokemonDetails?.height} </div>
                            <div className='d-flex justify-content-start '>Gender :  </div>
                        </div>

                        <div className='d-flex flex-column fs-3 w-50'>
                            {pokemonDetails?.types && (
                                <>
                                    {pokemonDetails.types.map((type, index) => (
                                        <span key={index}>{type.type.name}</span>
                                    ))}
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PokemonDetails;
