import React from 'react'
import LoginForm from './LoginForm'


class AuthAction extends React.Component {

  logoutWrapper = (e) => {
    e.preventDefault()
    this.props.logoutFn()
  }


  render() {
    return this.props.auth.current_user ?
      <a href="#" onClick={ this.logoutWrapper }>Logout</a> :
      <LoginForm login={ this.props.loginFn } />
    }
}

export default AuthAction
