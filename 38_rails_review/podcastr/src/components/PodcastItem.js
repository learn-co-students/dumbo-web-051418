import React from "react"

const PodcastItem = (props) => {
	const collectionName = props.podcast.collectionName[40] ? `${props.podcast.collectionName.slice(0,40)}...`: props.podcast.collectionName
	const artistName = props.podcast.artistName[40] ? `${props.podcast.artistName.slice(0,40)}...`: props.podcast.artistName
	return (
    <div className="podcast-item" onClick={props.selectPodcast}>
			<img src={props.podcast.artworkUrl600} alt={props.podcast.collectionName}/>
			<h2>{collectionName}</h2>
    	<p>{artistName}</p>
    </div>
  )
}

export default PodcastItem
