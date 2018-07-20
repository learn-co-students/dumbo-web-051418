import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = (props) => {
  const {
    pokemon,
    filterText
  } = props

  const pokemonListItems = pokemon.filter(pokemonItem => {
    return pokemonItem.name.includes(filterText)
  }).map(pokemonItem => {
    return <PokemonItem data={pokemonItem} key={pokemonItem.name} />
  })

  return (
    <div>
      { pokemonListItems }
    </div>
  )
}

export default PokemonList
