import React from 'react'
import artworks from '../artworks.js'
import Painting from './Painting.js'

class PaintingList extends React.Component {
  art = artworks;

  render() {
    const paintings = this.art.map((painting) => <Painting painting={painting} key={painting.id} />)
    return  (
      <div className="paintingList">
        { paintings }
      </div>
    )
  }
}

export default PaintingList;
