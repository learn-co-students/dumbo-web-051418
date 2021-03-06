import React, { Component } from 'react';

import SearchBar from "./components/SearchBar"
import SideBar from "./components/SideBar"
import PodcastList from "./components/PodcastList"
import PodcastShow from "./components/PodcastShow"


import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"

import { makeQuery, postSignIn, postSignUp, favoritePodcast, unFavoritePodcast } from "./adapter"

class App extends Component {

  state = {
    searchInput: "",
    podcasts: [],
    selectedPodcast: null,
    favorited: [],
    user: null
  }

  componentDidMount(){
    this.updatePodcasts()
  }

  updatePodcasts = () => {
    makeQuery(this.state.searchInput).then(this.setPodcasts)
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value }, this.updatePodcasts)
  }

  setPodcasts = (podcasts) => {
    this.setState({podcasts})
  }


  selectPodcast = (selectedPodcast) => {
    // const newState = { selectedPodcast }
    // if (this.state.favorited.find(p => p.collectionId === selectedPodcast.collectionId)){
    //   newState.favorited = this.state.favorited.filter(p => p.collectionId !== selectedPodcast.collectionId)
    // }
    this.setState({ selectedPodcast })
  }

  favorite = (podcast, podcastId) => {
    if (!this.state.favorited.find(p => p.collectionId === podcast.collectionId)){
      favoritePodcast(this.state.user.id, podcastId)
      this.setState({ favorited: [...this.state.favorited, podcast]})
    }
  }

  removeFromFavorited = (podcast, podcastId) => {
    unFavoritePodcast(this.state.user.id, podcastId)
    const newState = {}
    newState.favorited = this.state.favorited.filter(p => p.collectionId !== podcast.collectionId)
    this.setState(newState)
  }

  isFavorited = (podcast) => {
    return !!this.state.favorited.find(p => p.collectionId === podcast.collectionId)
  }

  unSelectPodcast = (selectedPodcast) => {
    this.setState({ selectedPodcast: null })
  }

  signIn = (username, password) => {
    postSignIn(username, password)
      .then(this.assignUser)
  }

  signUp = (username, password) => {
    postSignUp(username, password)
      .then(this.assignUser)
      .catch(console.log)
  }

  assignUser = ({user, favorited}) => {
    this.setState({
      user, favorited
    })
  }



  render() {
    return (
      <div className="App">
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange}/>
        { this.state.favorited[0] && <SideBar favorited={this.state.favorited} selectPodcast={this.selectPodcast}/>}
        { this.state.user ?
          this.state.selectedPodcast ?
          <PodcastShow podcast={this.state.selectedPodcast} unSelectPodcast={this.unSelectPodcast} favorite={this.favorite} removeFromFavorited={this.removeFromFavorited} isFavorited={this.isFavorited}/> :
          <PodcastList podcasts={this.state.podcasts} selectPodcast={this.selectPodcast}/>
          :
          <React.Fragment>
            <SignIn handleSubmit={this.signIn} />
            <SignUp handleSubmit={this.signUp} />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
