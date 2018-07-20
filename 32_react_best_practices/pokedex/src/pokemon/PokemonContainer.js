import React, { Fragment } from 'react'
import PokemonList from './PokemonList'
import PokemonFilter from './PokemonFilter'

class PokemonContainer extends React.Component {
  state = {
    input: ''
  }

  changeFilterInput = (input) => {
    this.setState({
      input
    })
  }

  render() {
    const {
      pokemon
    } = this.props

    return (
      <Fragment>
        <PokemonFilter inputValue={this.state.input} changeFilterInput={this.changeFilterInput} />
        <PokemonList pokemon={pokemon} filterText={this.state.input} />
      </Fragment>
    )
  }

}


export default PokemonContainer
