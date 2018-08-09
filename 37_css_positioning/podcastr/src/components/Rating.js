import React from "react"

const Rating = ({ rating }) => {
  const stars = Array(Math.round(rating || 0)).fill("⭐")

  return (
    <React.Fragment>
      {stars}
    </React.Fragment>
  )
}

export default Rating
