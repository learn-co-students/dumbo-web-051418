import React, { Fragment } from 'react'
import PokemonList from './PokemonList'
import PokemonFilter from './PokemonFilter'
import { Route, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'
import { makePokemonRequest, makeUserTeamRequest, setUserTeam } from '../adapter/adapter'

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

  makeTeamFetch = () => {
    // 1. is there a user prop?
    // 2. is the user prop different from the previously set user state?
    // if so: get the team pokemon, set them in state, and set the user for those pokemon in state
    if (this.props.current_user && this.props.current_user !== this.state.current_user) {
      makeUserTeamRequest(this.props.current_user.id, localStorage.getItem('token')).then(pokemonData => {
        this.setState({
          team: pokemonData,
          current_user: this.props.current_user
        })
      })
    }
  }

  setTeam = () => {
    if (this.props.current_user) {
      setUserTeam(this.props.current_user.id, localStorage.getItem('token'), this.state.team).then(pokemonData => {
        this.setState({
          team: pokemonData,
          current_user: this.props.current_user
        })
      })
    }
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
      }, () => this.setTeam())
    }

  }

  removeFromTeam = (pokemon) => {
    this.setState(prevState => {
      prevState.team.splice(prevState.team.indexOf(pokemon), 1)
      return {
        team: prevState.team
      }
    }, () => this.setTeam())
  }

  render() {
    this.makeTeamFetch()

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
              { this.props.current_user && <MyTeam pokemon={this.state.team} clickPokemon={this.removeFromTeam} setTeam={this.setTeam} /> }
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
