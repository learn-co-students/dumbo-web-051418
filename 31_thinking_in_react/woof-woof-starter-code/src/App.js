import React, { Component } from 'react';
// import dogs from "./dogData"

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {


  render() {
    return (
      <div>
        <DogList />
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogInfo />
        </div>
      </div>
    );
  }
}

export default App;
