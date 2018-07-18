import React from "react"
import DogItem from "./DogItem"



class DogList extends React.Component {

	dogItemsToRender = () => {
		return this.props.dogs.map( dog => {
			return <DogItem key={dog.id} dog={dog} handleClick={this.props.handleClick} />
		})
	}

	render(){
		return (
      <div id="dog-list">
      	{ this.dogItemsToRender() }
      </div>
  )
	}
}

export default DogList
