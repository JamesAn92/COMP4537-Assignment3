import React from 'react';

function Page({ pokemons, pageNumber }) {
//pageNumber = 20;
const pokemonPerPage = 10;
const start = (pageNumber - 1) * pokemonPerPage;
const end = start + pokemonPerPage;
const pokemonsPerPage = pokemons.slice(start, end);


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
    <div>        
        <h1>Page number {pageNumber}</h1>
        <div className='pokemons'> 
        {
            pokemonsPerPage.map((pokemon, index) => {
                return (
                    <div key={index} className='pokemon-img'>
                    <p>{pokemon.name.english}</p>
                    <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${callf(pokemon.id)}${pokemon.id}.png`} alt={pokemon.name.english} />
                    </div>
                )
            }
        )}
        </div>
    </div>
  );
}

export default Page;