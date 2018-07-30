import React from 'react'
import withAuth from '../hoc/withAuth'

class SimpleGifShower extends React.Component {
  state = {
    gif: null
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=b4pMHGLMt10XtC6ze4yNlekszHQAxshN')
      .then(r => r.json()).then(g => {
        this.setState({
          gif: g.data.images.original.url
        })
      })
  }

  render() {
    return (
      <div>
        <br />
        {this.state.gif ?
          (<img src={this.state.gif}></img>) :
          (<img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />)
        }
      </div>
    )
  }
}

export default withAuth(SimpleGifShower)
