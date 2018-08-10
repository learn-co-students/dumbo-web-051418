import React from "react"

function msToTime(duration) {
    let seconds = parseInt((duration/1000)%60, 10)
    let minutes = parseInt((duration/(1000*60))%60, 10)
    let hours = parseInt((duration/(1000*60*60))%24, 10)

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds
}

const Episode = ({ name, description, release_date, duration }) => {
  return (
    <tr className="episode">
      <td className="table-name">{name}</td>
      <td className="table-desc">{description}</td>
      <td className="table-date">{release_date}</td>
      <td className="table-duration">{msToTime(duration)}</td>
    </tr>
  )
}

export default Episode
