import React, { Component } from 'react';
import dogs from "./dogData"

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogId: 1,
      dogs: dogs
    }
  }

  toggleIsGoodDog = (dogId) => {
    const newDogsArray = this.state.dogs.map(dog => {
      if (dog.id === dogId) {
        dog.isGoodDog = !dog.isGoodDog
      }
        return dog
    })
    this.setState({dogs: newDogsArray})
  }

  displayDog = (dog) => {
    this.setState({
      dogId: dog.id
    })
  }

  dogToRender = () => {
    return this.state.dogs.find(dog => dog.id === this.state.dogId)
  }

  render() {
    return (
      <div>
        <DogList dogs={this.state.dogs} handleClick={this.displayDog}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogInfo dog={ this.dogToRender() } handleClick={this.toggleIsGoodDog} />
        </div>
      </div>
    );
  }
}

export default App;
