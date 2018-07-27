import React, { Fragment }  from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="ui top fixed menu">
      <div className="item">
        <h1>MiniDex</h1>
      </div>
      { props.current_user && (<div className="item">
        <p>Welcome! { props.current_user.username }</p>
      </div>) }
      <Link className="item" to="/pokemon">Pokemon</Link>
      { props.current_user ?
        <Link className="item" to="/logout">Log Out</Link>
        : (<Fragment>
            <Link className="item" to="/signup">Sign Up</Link>
            <Link className="item" to="/login">Log In</Link>
          </Fragment>)
      }
    </div>
  )
}

export default Nav
