import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { makePokemonRequest, createUser, loginUser } from './adapter/adapter'
import PokemonContainer from './pokemon/PokemonContainer'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './util/NotFound'
import Nav from './util/Nav'
import AuthAction from './auth/AuthAction'

class App extends Component {
  state = {
    current_user: null
  }

  componentDidMount() {
    console.log("App mounted")
    if (localStorage.getItem('current_user')) {
      this.setState({
        current_user: JSON.parse(localStorage.getItem('current_user'))
      })
    }

  }

  submitSignUp = (username, password) => {
    createUser(username, password).then((user) => {
      this.setState({ current_user: user }, () => {
        localStorage.setItem('current_user', JSON.stringify(this.state.current_user))
      })
    })
    // redirect to pokemon page
  }

  submitLogin = (username, password) => {
    loginUser(username, password).then((user) => {
      this.setState({ current_user: user }, () => {
        localStorage.setItem('current_user', JSON.stringify(this.state.current_user))
      })
    })
    // redirect to pokemon page
  }

  render() {
    return (
      <div className="App">
        <Nav current_user={ this.state.current_user }/>
        <div style={{paddingTop: "63px"}}>
          <Switch>
            <Route path="/pokemon" render={() => {
              return <PokemonContainer />
            }} />
            <Route path="/signup" render={() => {
              return <AuthAction submitAuthAction={this.submitSignUp} />
            }} />
            <Route path="/login" render={() => {
              return <AuthAction  submitAuthAction={this.submitLogin} />
            }} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
