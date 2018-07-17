import React, { Component } from 'react';
import './App.css';
import Menu from './nav/Menu.js';
import PaintingList from './paintings/PaintingList.js'
import Painting from './paintings/Painting.js'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    selectedPainting: null
  }

  choosePainting = (painting) => {
    this.setState((previousState) => {
      return {
        selectedPainting: painting
      }
    })
  }

  resetPainting = () => {
    this.setState((previousState) => {
      return {
        selectedPainting: null
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Menu />
        { this.state.selectedPainting ?
          <Painting painting={this.state.selectedPainting} onClick={this.resetPainting} />
          :
          <PaintingList choosePainting={this.choosePainting} />
        }
      </div>
    );
  }
}

export default App;
