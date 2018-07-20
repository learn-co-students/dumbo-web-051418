import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props)
    console.log("Child constructed")
  }

  render() {
    console.log("Child rendered")
    return (
      <React.Fragment>
        <p>Look at the logs to see what's going on.</p>
        <p>The component heirarchy is Grandparent -> Parent -> Child, and you can see in which order each of "constructor", "render", and "componentDidMount" are called.</p>
        <p>Each component renders after it is constructed. However, it is not considered "mounted" until all of it's children are mounted.</p>
        <p>Feel free to play with the structure to see what's going on!</p>
      </React.Fragment>
    )
  }

  componentDidMount() {
    console.log("Child did mount")
  }
}

export default Child
