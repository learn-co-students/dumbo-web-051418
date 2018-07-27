import React from 'react'

const PokemonDetails = (props) => {
  const typeString = props.pokemon.types.map(typeData => typeData.type.name).join(" ")
  const abilitiesString = props.pokemon.abilities.map(abilityData => abilityData.ability.name).join(" ")
  return (
    <div>
      <h1>{props.pokemon.name}</h1>
      <img src={ props.pokemon.sprites.front_default } />
      <h3>Abilities</h3>
      <p>{typeString}</p>
      <p>{abilitiesString}</p>
    </div>
  )
}

export default PokemonDetails
