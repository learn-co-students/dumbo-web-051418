import React from 'react'

class Painting extends React.Component {
  state = {
    votes: 0
  }

  incrementVote = (e) => {
    this.setState((previousState) => {
      return {
        votes: previousState.votes + 1
      }
    }, () => {
      console.log(this.state.votes)
    })
  }

  render() {
    return (
      <div className="item">
        <div className="ui small image">
          <img src={this.props.painting.image} alt={this.props.painting.title} onClick={this.props.onClick} />
        </div>
        <div className="middle aligned content">
          <div className="header">{this.props.painting.title} by {this.props.painting.artist.name}</div>
        </div>
        <div className="votes" onClick={this.incrementVote}>
          <p> {this.state.votes} vote(s)</p>
        </div>
      </div>
    )
  }
}

export default Painting;
