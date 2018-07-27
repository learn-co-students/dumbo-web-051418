import React from 'react'
import PokemonItem from './PokemonItem'


const MyTeam = ({pokemon, clickPokemon, setTeam}) => {
  const team = pokemon.map(pokemonItem => {
    return <PokemonItem pokemon={pokemonItem} key={pokemonItem.id} click={clickPokemon} />
  })

  return (
    <div className="ui segment inverted red team">
      <div className="ui five column grid">
        <div className="row team-row">
          {team}
        </div>
        {/*<div className="row">
          <button onClick={setTeam}>Save</button>
        </div>*/}
      </div>
    </div>
  )
}

export default MyTeam
