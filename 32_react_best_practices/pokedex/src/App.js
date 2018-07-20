import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { makePokemonRequest } from './adapter/adapter'
import PokemonContainer from './pokemon/PokemonContainer'

class App extends Component {
  state = {
    pokemon: []
  }

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     pokemon: []
  //   }
  // }

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
        <h1>MiniDex</h1>
        <PokemonContainer pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
