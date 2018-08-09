import React from "react"

const SideBar = (props) => {
	return (
    <div id="side-bar">
      {props.favorited.map(pod => <div key={pod.collectionId} className="favorited" onClick={() => props.selectPodcast(pod)}>{pod.collectionName}</div>)}
    </div>
  )
}

export default SideBar
