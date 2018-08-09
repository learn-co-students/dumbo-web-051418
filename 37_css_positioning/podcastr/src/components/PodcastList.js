import React from "react"
import PodcastItem from "./PodcastItem"

const PodcastList = (props) => {
	return (
    <div id="podcast-list">
      { props.podcasts.map(p => <PodcastItem key={p.collectionId} podcast={p} selectPodcast={() => props.selectPodcast(p)}/>) }
    </div>
  )
}

export default PodcastList
