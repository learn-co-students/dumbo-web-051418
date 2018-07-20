import React from 'react'
import Child from './Child'

class Parent extends React.Component {
  constructor(props) {
    super(props)
    console.log("Parent constructed")
  }

  render() {
    console.log("Parent rendered")
    return (<Child />)
  }

  componentDidMount() {
    console.log("Parent did mount")
  }
}

export default Parent
