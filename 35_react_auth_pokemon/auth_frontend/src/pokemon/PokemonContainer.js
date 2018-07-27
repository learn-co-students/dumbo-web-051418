import React, { Fragment } from 'react'
import PokemonList from './PokemonList'
import PokemonFilter from './PokemonFilter'
import { Route, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'
import { makePokemonRequest } from '../adapter/adapter'

import MyTeam from './MyTeam'

class PokemonContainer extends React.Component {
  state = {
    input: '',
    pokemon: [],
    team: []
  }

  componentDidMount() {
    makePokemonRequest().then(pokemonData => {
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  changeFilterInput = (input) => {
    this.setState({
      input
    })
  }

  addToTeam = (pokemon) => {
    if (this.state.team.length < 6 && !this.state.team.includes(pokemon)) {
      this.setState(prevState => {
        return {
          team: [...prevState.team, pokemon]
        }
      })
    }
  }

  removeFromTeam = (pokemon) => {
    this.setState(prevState => {
      prevState.team.splice(prevState.team.indexOf(pokemon), 1)
      return {
        team: prevState.team
      }
    })
  }

  render() {
    const {
      pokemon
    } = this.props

    return (
      <Switch>
        <Route path="/pokemon/:id" render={(routerProps) => {
          const oneMon = pokemon.find((oneMon) => {
            return oneMon.id === routerProps.match.params.id
          })
          return <PokemonDetails pokemon={oneMon}  />
        }} />
        <Route path="/pokemon" render={() => {
          return (
            <Fragment>
              <MyTeam pokemon={this.state.team} clickPokemon={this.removeFromTeam} />
              <PokemonFilter inputValue={this.state.input} changeFilterInput={this.changeFilterInput} />
              <PokemonList pokemon={this.state.pokemon} filterText={this.state.input} clickPokemon={this.addToTeam} />
            </Fragment>
          )
        }} />
      </Switch>

    )
  }

}


export default PokemonContainer
