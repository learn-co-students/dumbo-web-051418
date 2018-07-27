import React from 'react'

class AuthAction extends React.Component {
  state = {
    username: "",
    password: ""
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.submitAuthAction(this.state.username, this.state.password)
      }} >
        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onInputChange} />
        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onInputChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default AuthAction
