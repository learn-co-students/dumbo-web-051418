import React from 'react'

const Navbar = (props) => {
  return (
    <div className="ui inverted orange menu">
      <a className="item">
        <h2 className="ui header">
          <i className="paw icon" />
          <div className="content">
            { props.content }
          </div>
          <div className="sub header">
            { props.subheader }
          </div>
        </h2>
      </a>
    </div>
  )
}

export default Navbar;


// React.createElement('div', { className: "ui inverted orange menu" }, [
//   React.createElement('a', { className: 'item' }, [
//     React.createElement('h2', { className: 'ui header' }, [
//       React.createElement('i', { className: 'paw icon' }, []),
//       React.createElement('div', { className: 'content' }, content),
//       React.createElement('div', { className: 'sub header' }, subheader)
//     ])
//   ])
// ])
