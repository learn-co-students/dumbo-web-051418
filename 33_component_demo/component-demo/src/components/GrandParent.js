import React from 'react'
import Parent from './Parent'

class GrandParent extends React.Component {
  constructor(props) {
    super(props)
    console.log("GrandParent constructed")
  }

  render() {
    console.log("GrandParent rendered")
    return (<Parent />)
  }

  componentDidMount() {
    console.log("GrandParent did mount")
  }
}

export default GrandParent
