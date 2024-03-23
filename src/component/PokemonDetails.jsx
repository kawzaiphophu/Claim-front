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
            <Nav/>
            <div className='container pt-5 mt-5' style={{height:'100vh'}}>
                <div className='text-center pokemondiv '>
                    <div className='d-flex justify-content-between px-2 pt-5'>
                        <div className={`btn btn-light fs-4 ${currentId <= 1 ? 'disabled' : ''}`} onClick={handlePrevClick}>Prev</div>
                        <h1 className=''>{pokemonDetails?.name} #{pokemonDetails?.id}</h1>
                        <div className={`btn btn-light fs-4 ${currentId >= 1025 ? 'disabled' : ''}`} onClick={handleNextClick}>Next</div>
                    </div>
                  
                    <img className='mx-auto' src={pokemonDetails?.sprites?.other?.home?.front_default} alt={pokemonDetails?.name} />
                </div>
            </div>

        </div>
    );
};

export default PokemonDetails;