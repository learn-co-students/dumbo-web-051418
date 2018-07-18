import React from "react"

class DogItem extends React.Component {

	callHandleClick = (e) => {
		this.props.handleClick(this.props.dog)
	}

	render(){
		return (<span onClick={this.callHandleClick}>{this.props.dog.name}</span>)
	}
}

export default DogItem
