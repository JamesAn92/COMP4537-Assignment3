import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function FilteredPokemons() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchPokemons() {
            const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
            setPokemons(response.data.pokemon)
        }
        fetchPokemons()
    }, [])


    return (
        <div>
            {
                pokemons.map(pokemon => {
                    if (pokemon.type.some(type => typeSelectedArray.includes(type)))
                        return (
                            <div key={pokemon.id}>
                                {pokemon.name.english}
                            </div>
                        )
                // <div key={pokemon.id}>
                //     pokemon.name.english
                // </div>
                // )
                })
            }
        </div>
    )

}

export default FilteredPokemons