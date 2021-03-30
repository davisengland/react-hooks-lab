import React from 'react'

const Pokemon = (props) => {
    const {pokemon} = props

    const mappedPokemon = pokemon.map((pokemon, i) => <h2 key={i}>{pokemon.name}</h2>)

    return(
        <div>
            {mappedPokemon}
        </div>
    )
}

export default Pokemon