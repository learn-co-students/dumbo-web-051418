import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { makePokemonRequest } from './adapter/adapter'
import PokemonContainer from './pokemon/PokemonContainer'
import { Route, Switch, Redirect } from 'react-router-dom'
import RishiComponent from './RishiComponent'
import NotFound from './util/NotFound'
import Nav from './util/Nav'

class App extends Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    makePokemonRequest().then(pokemonData => {
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  render() {
    console.log(this.state.pokemon)
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/pokemon" render={() => {
            return <PokemonContainer pokemon={this.state.pokemon} />
          }} />
          <Route path="/rishi" render={() => {
            return <RishiComponent name="ASH KETCHUM" />
          }} />
          <Route path="/rishikesh" render={() => {
            return <Redirect to="rishi" />
          }} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
