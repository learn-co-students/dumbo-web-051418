import React, { Fragment } from 'react'
import PokemonList from './PokemonList'
import PokemonFilter from './PokemonFilter'
import { Route, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'


class PokemonContainer extends React.Component {
  state = {
    input: ''
  }

  changeFilterInput = (input) => {
    this.setState({
      input
    })
  }

  find_by_name = (name) => {

  }

  render() {
    const {
      pokemon
    } = this.props

    return (
      <Switch>
        <Route path="/pokemon/:name" render={(routerProps) => {
          const oneMon = pokemon.find((oneMon) => {
            return oneMon.name === routerProps.match.params.name
          })
          return <PokemonDetails pokemon={oneMon}  />
        }} />
        <Route path="/pokemon" render={() => {
          return (
            <Fragment>
              <PokemonFilter inputValue={this.state.input} changeFilterInput={this.changeFilterInput} />
              <PokemonList pokemon={pokemon} filterText={this.state.input} />
            </Fragment>
          )
        }} />
      </Switch>

    )
  }

}


export default PokemonContainer
