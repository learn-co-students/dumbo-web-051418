import React from "react"

class DogInfo extends React.Component {

	callHandleClick = () => {
		this.props.handleClick(this.props.dog.id)
	}

	goodDogButtonText = () => {
		if (this.props.dog.isGoodDog){
			return "Good Dog"
		} else {
			return "Bad Dog"
		}
	}

	render(){
			const goodDogColor = this.props.dog.isGoodDog ? "yellow" : "red"
			const imgStyle = {
				boxShadow: `0 0 30px 15px ${goodDogColor}, 0 0 50px 15px ${goodDogColor}, 0 0 75px 45px ${goodDogColor}`
			}

			return (
				<div id="dog-info">
				<img src={this.props.dog.image} style={imgStyle} alt="pup pup"/>
				<h2>{this.props.dog.name}</h2>
				<button onClick={ this.callHandleClick }>{ this.goodDogButtonText() }</button>
				</div>
			)

	}
}

export default DogInfo
