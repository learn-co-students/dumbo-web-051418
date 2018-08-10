import React from "react"

import { getPodcastInfo } from "../adapter"

import Rating from "./Rating"
import EpisodeList from "./EpisodeList"
import Loading from "./Loading"

class PodcastShow extends React.Component {

    state = {
      episodes: [],
      rating: null,
      loading: false
    }

    setPodcastInfo(){
      this.setState({
        loading: true
      }, () => {
        getPodcastInfo(this.props.podcast)
        .then(newState => this.setState({...newState, loading: false}))
      })
    }

    componentDidMount(){
      this.setPodcastInfo()
    }

    componentDidUpdate(prevProps){
      if (this.props.podcast.collectionViewUrl !== prevProps.podcast.collectionViewUrl) {
        this.setPodcastInfo()
      }
    }

    render() {
      if (this.state.loading){
        return <Loading />
      } else {
        const favoriteButton = this.props.isFavorited(this.props.podcast) ?
        <span role="img" aria-label="unfavorite" onClick={() => this.props.removeFromFavorited(this.props.podcast, this.state.id)}>🤮</span> :
        <span role="img" aria-label="favorite" onClick={() => this.props.favorite(this.props.podcast, this.state.id)}>⭐</span>
        return (
          <div id="podcast-show">
            <div id="navigation-buttons">
              <span role="img" aria-label="close" onClick={() => this.props.unSelectPodcast(this.props.podcast)}>👈</span>
              {favoriteButton}
            </div>
            <div id="podcast-image">
              <img src={this.props.podcast.artworkUrl600} alt={this.props.podcast.collectionName}/>
            </div>
            <div id="podcast-info">
              <h2>{this.props.podcast.collectionName}</h2>
              <p>{this.props.podcast.artistName}</p>
              <p>Genres: {this.props.podcast.genres.join(", ")}</p>
              <Rating rating={this.state.rating}/>
            </div>
            <EpisodeList episodes={this.state.episodes}/>
          </div>
        )
      }
  }

}

export default PodcastShow
