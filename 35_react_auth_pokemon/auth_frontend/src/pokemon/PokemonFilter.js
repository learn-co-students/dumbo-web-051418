import React from 'react'

const PokemonFilter = (props) => {
  return (
    <div className="ui segment olive inverted">
      <input placeholder="Filter by name" value={props.inputValue}  onChange={(e) => props.changeFilterInput(e.target.value)} />
    </div>
  )
}

export default PokemonFilter
