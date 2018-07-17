import React from 'react'
import artworks from '../artworks.js'
import Painting from './Painting.js'

class PaintingList extends React.Component {
  art = artworks;

  paintings = this.art.map((painting) => {
    return <Painting
      painting={painting}
      key={painting.id}
      onClick={() => {
        console.log(painting)
        this.props.choosePainting(painting)
      }} />
  })

  render() {
    return  (
      <div className="paintingList">
        { this.paintings }
      </div>
    )
  }
}

export default PaintingList;
