import React from "react"

class SignUp extends React.Component {
	state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleSubmit(this.state.username, this.state.password)
	}

	render(){
		return (
      <form id="sign-up" onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' name="username" onChange={this.handleChange} value={this.state.username} />
        <label htmlFor='password'>Password</label>
        <input type='password' name="password" onChange={this.handleChange} value={this.state.password} />
        <button type='submit'>Sign Up</button>
      </form>
    )
	}
}

export default SignUp
