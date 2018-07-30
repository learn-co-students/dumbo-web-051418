import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './service/api'
import GifShower from './components/GifShower' //this is actually withAuth(GifShower)
import SimpleGifShower from './components/SimpleGifShower'

import AuthAction from './components/AuthAction'
import { Switch, Route, Redirect, withRouter } from 'react-router'

class App extends Component {
  state = {
    auth: {
      loading: true,
      current_user: null
    }
  }

  setCurrentUserFromApi = () => {
    api.getCurrentUser().then((resp) => {
      if (resp.error) {
        console.log("AUTH ERROR:", resp.error)
        this.logout()
      } else {
        this.setState({
          auth: {
            loading: false,
            current_user: resp.user
          }
        })
      }
    })
  }

  componentDidMount() {
    this.setCurrentUserFromApi()
  }

  login = (username, password) => {
    api.login(username, password).then(resp => {
      if(resp.error) {
        alert(resp.error)
        this.setState({
          auth: {
            loading: false,
            current_user: null
          }
        })
      } else {
        localStorage.setItem('token', resp.token)
        this.setCurrentUserFromApi()
        this.props.history.push('/gif2')
      }
    })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: {
        loading: false,
        current_user: null
      }
    })
    this.props.history.push('/')
  }


  render() {
    return (
      <div className="App">
        <AuthAction loginFn={this.login} logoutFn={this.logout} auth={this.state.auth} />
        <Switch>
          <Route path="/gif" render={(routerProps) => {
            return <GifShower auth={this.state.auth} />
          }} />
          <Route path="/gif2" render={(routerProps) => {
            return <SimpleGifShower auth={this.state.auth} history={this.props.history} />
          }} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
