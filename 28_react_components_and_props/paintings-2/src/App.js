import React, { Component } from 'react';
import './App.css';
import Menu from './nav/Menu.js';
import PaintingList from './paintings/PaintingList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PaintingList />
      </div>
    );
  }
}

export default App;
