import React from "react"

const SearchBar = (props) => {
	return (
    <div id="search-bar">
      <input type="text" value={props.searchInput} onChange={props.handleChange} placeholder="Type here to search for podcasts..."/>
    </div>
  )
}

export default SearchBar
