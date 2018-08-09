import React from "react"

import Episode from "./Episode"

const EpisodeList = ({ episodes }) => {
  return (
    <table id="episode-list">
      <thead>
        <tr>
          <th className="table-name">Name</th>
          <th className="table-desc">Description</th>
          <th className="table-date">Date</th>
          <th className="table-duration">Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(e => <Episode key={e.name+e.release_date} {...e} />)}
      </tbody>
    </table>
  )
}

export default EpisodeList
