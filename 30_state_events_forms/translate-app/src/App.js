import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LanguageInput from './LanguageInput'

class App extends Component {
  state = {
    text: '',
    lang: "en"
  }

  changeParameter = (value, type) => {
    this.setState((previousState) => {
      return {
        [type]: value
      }
    })
  }

  translated = () => {
    return this.state.text.replace('fuck', 'sprinkles')
  }

  render() {
    return (
      <div className="App">
        <h1>Gonna clean your language</h1>
        <LanguageInput text={this.state.text} lang={this.state.lang} onMyChange={this.changeParameter} />
        <br />
        <LanguageInput text={this.translated()} lang={this.state.lang} onMyChange={this.changeParameter} />
      </div>
    );
  }
}

export default App;
