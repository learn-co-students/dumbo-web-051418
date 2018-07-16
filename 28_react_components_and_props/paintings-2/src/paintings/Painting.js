import React from 'react'

class Painting extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="ui small image">
          <img src={this.props.painting.image} alt={this.props.painting.title} />
        </div>
        <div className="middle aligned content">
          <div className="header">{this.props.painting.title} by {this.props.painting.artist.name}</div>
        </div>
      </div>
    )
  }
}

export default Painting;
