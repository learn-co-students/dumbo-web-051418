import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
      <h1>MiniDex</h1>
      <Link to="/pokemon">Pokemon</Link>
      <br />
      <Link to="/rishi">Rishi's Page</Link>
      <br />
      <Link to="/404">404 4 fun</Link>
    </div>
  )
}

export default Nav
