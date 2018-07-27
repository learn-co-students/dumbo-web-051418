import React from 'react'
import { makeOnePokemonrequest } from '../adapter/adapter'
import { Link } from 'react-router-dom'

const PokemonItem = ({ pokemon, click }) => {
  return (
    <div className="ui column" style={{paddingBottom: '20px' }} onClick={() => click(pokemon)}>
      <div className="ui card" key={pokemon.id}>
        <div className="image">
          <img alt="oh no!" src={pokemon.img} />
        </div>
        <div className="content">
          <div className="header">
            {pokemon.name}
          </div>
          <div className="meta wrap-text">
            <small><i className="icon balance scale"/> {pokemon.height} and {pokemon.weight}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonItem
