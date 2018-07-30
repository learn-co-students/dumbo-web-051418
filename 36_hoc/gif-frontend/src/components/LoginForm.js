import React from 'react'

class LoginForm extends React.Component {
  state = {username: '', password: ''}

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="username" onChange={this.onInputChange} value={this.state.username} />
        <input type="password" name="password" onChange={this.onInputChange} value={this.state.password} />
        <input type="submit" />
      </form>
    )
  }
}

export default LoginForm
