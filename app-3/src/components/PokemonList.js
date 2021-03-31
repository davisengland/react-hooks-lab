import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([])
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => setPokemonList(res.data.results))
    }, [])

    const mappedPokemon = pokemonList.map((pokemon, i) => {
        return(
            <div key={i}>
                <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
                    <h2>{pokemon.name}</h2>
                </Link>
            </div>
        )
    })

    return(
        <div>
            {mappedPokemon}
        </div>
    )
}

export default PokemonList