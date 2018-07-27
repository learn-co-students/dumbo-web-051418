import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { makePokemonRequest, createUser, loginUser, getCurrentUser } from './adapter/adapter'
import PokemonContainer from './pokemon/PokemonContainer'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NotFound from './util/NotFound'
import Nav from './util/Nav'
import AuthAction from './auth/AuthAction'

class App extends Component {
  state = {
    current_user: null
  }

  componentDidMount() {
    console.log("App mounted")
    if (localStorage.getItem('token')) {
      getCurrentUser(localStorage.getItem('token')).then((user) => {
        if (user) {
          this.setState({
            current_user: user
          })
        } else {
          this.logOut()
        }
      })

    }

  }

  submitSignUp = (username, password) => {
    createUser(username, password).then((data) => {
      getCurrentUser(data.token).then((user) => {
        this.setState({ current_user: user }, () => {
          localStorage.setItem('token', data.token)
          this.props.history.push('/pokemon')
        })
      })
    })
  }

  submitLogin = (username, password) => {
    loginUser(username, password).then((data) => {
      getCurrentUser(data.token).then((user) => {
        this.setState({ current_user: user }, () => {
          localStorage.setItem('token', data.token)
          this.props.history.push('/pokemon')
        })
      })

    })
  }

  logOut = () => {
    localStorage.removeItem('token')
    this.setState({ current_user: null })
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        <Nav current_user={ this.state.current_user } logOut={this.logOut}/>
        <div style={{paddingTop: "63px"}}>
          <Switch>
            <Route path="/pokemon" render={() => {
              return <PokemonContainer current_user={ this.state.current_user }/>
            }} />
            <Route path="/signup" render={() => {
              return (this.state.current_user ? <Redirect to="/pokemon" />
                : <AuthAction submitAuthAction={this.submitSignUp} />)
            }} />
            <Route path="/login" render={() => {
              return (this.state.current_user ? <Redirect to="/pokemon" />
                : <AuthAction  submitAuthAction={this.submitLogin} />)
            }} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
