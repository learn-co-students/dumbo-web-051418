import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = (props) => {
  const {
    pokemon,
    filterText,
    clickPokemon
  } = props

  const pokemonListItems = pokemon.filter(pokemonItem => {
    return pokemonItem.name.toLowerCase().includes(filterText.toLowerCase())
  }).map(pokemonItem => {
    return <PokemonItem pokemon={pokemonItem} key={pokemonItem.id} click={clickPokemon} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        { pokemonListItems }
      </div>
    </div>
  )
}

export default PokemonList
