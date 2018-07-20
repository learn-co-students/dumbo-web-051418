import React from 'react'
import { makeOnePokemonrequest } from '../adapter/adapter'

const PokemonItem = (props) => {
  const pokemon = props.data
  const typeString = pokemon.types.map(typeData => typeData.type.name).join(" ")
  return (
    <div>
      <h3>{ pokemon.name }</h3>
      <p>Type(s): { typeString }</p>
      <img src={ pokemon.sprites.front_default } />
    </div>
  )
}

export default PokemonItem
