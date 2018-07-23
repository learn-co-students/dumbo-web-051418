import React from 'react'
import { makeOnePokemonrequest } from '../adapter/adapter'
import { Link } from 'react-router-dom'

const PokemonItem = (props) => {
  const pokemon = props.data
  const typeString = pokemon.types.map(typeData => typeData.type.name).join(" ")
  return (
    <div>
      <h3>{ pokemon.name }</h3>
      <p>Type(s): { typeString }</p>
      <Link to={`/pokemon/${pokemon.name}`}><img src={ pokemon.sprites.front_default } /></Link>
    </div>
  )
}

export default PokemonItem
