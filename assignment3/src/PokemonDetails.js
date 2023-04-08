import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await axios.get(`http://localhost:6001/api/v1/pokemon/${id}`);
        const data = response.data;
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const callf = (id) => {
    if (id < 10) {
        return '00';
    } else if (id < 100) {
        return '0';
    } else {
        return '';
    }
}


  return (
    <div className='pokemon-details'>
      <h1>{pokemon.name.english}</h1>
      <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${callf(pokemon.id)}${pokemon.id}.png`} alt={pokemon.name.english} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <ul className='types'>
        {pokemon.type.map(type => <li key={type}>{type}</li>)}
      </ul>
    </div>
  );
}

export default PokemonDetails;