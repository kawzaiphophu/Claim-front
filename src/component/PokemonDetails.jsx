import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
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
            console.log(pokemonDetails);
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
            <Nav />
            <div className='container pt-5 mt-5' style={{ height: '100vh' }}>
                <div className='text-center pokemondiv '>
                    <div className='d-flex justify-content-between '>
                        <div className={`btn btn-light fs-4 ${currentId <= 1 ? 'disabled' : ''}`} onClick={handlePrevClick}>Prev</div>
                        <div className={`btn btn-light fs-4 ${currentId >= 1025 ? 'disabled' : ''}`} onClick={handleNextClick}>Next</div>
                    </div>
                    <h1 className=''>{pokemonDetails?.name} #{pokemonDetails?.id}</h1>
                    <div className='img'>
                        <img className='img-1' src="https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                        <img className='mx-auto img-2 d-flex align-items-center pb-5 ' src={pokemonDetails?.sprites?.other?.home?.front_default} alt={pokemonDetails?.name} />
                    </div>
                    <h2 className=''>weight : {pokemonDetails?.weight}   height : {pokemonDetails?.height} </h2>
                </div>
            </div>

        </div>
    );
};

export default PokemonDetails;
