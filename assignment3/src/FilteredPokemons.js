import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function FilteredPokemons({ filteredPokemons, setFilteredPokemons, pageNumber, typeSelectedArray }) {
    
    const [pokemons, setPokemons] = useState([]);
    // const [filteredPokemons, setFilteredPokemons] = useState([])
    const pokemonPerPage = 10;
    const start = (pageNumber - 1) * pokemonPerPage;
    const end = start + pokemonPerPage;
    //const pokemonsPerPage = pokemons.slice(start, end);
    

    useEffect(() => {
        async function fetchPokemons() {
            const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
            setPokemons(response.data)
        }
        fetchPokemons()
    }, [])

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
            {
                pokemons.map((pokemon, index) => {
                    if (typeSelectedArray.every(type => pokemon.type.includes(type))) {
                        //pokemonsPerPage.map((pokemon, index) => {
                            setFilteredPokemons(pokemon);
                            return (
                                <div key={pokemon.id}>
                                    {pokemon.name.english}
                                    <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${callf(pokemon.id)}${pokemon.id}.png`} alt={pokemon.name.english} />
                                    <ul>
                                        {pokemon.type.map(type => <li key={type}>{type}</li>)}
                                    </ul>
                                </div>
                                
                            )
                       // })
                    }
                })
            }
        </div>
    )

}


export default FilteredPokemons