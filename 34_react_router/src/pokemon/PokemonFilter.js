import React from 'react'

const PokemonFilter = (props) => {
  return <input value={props.inputValue}  onChange={(e) => props.changeFilterInput(e.target.value)} />
}

export default PokemonFilter
