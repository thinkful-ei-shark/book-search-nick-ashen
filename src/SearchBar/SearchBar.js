import React, {Component} from 'react';

class SearchBar extends Component {
 handleSearchSubmit(e) {
    e.preventDefault();
    this.props.fetchBooks()
    
    console.log(e.target.search.value)
  }
  handleSearchChange(e) {
    e.preventDefault();
    this.props.setSearch(e.target.value);
    
    console.log(e.target.value)
  }

  render() {
    return (
      <form id="search-bar-form" onSubmit={e => this.handleSearchSubmit(e)}>
        <label htmlFor="search-bar">Search: </label>
        <input type="text" id="search-bar" placeholder="Henry the Eighth" name="search" onChange={(e) => this.handleSearchChange(e)}/>
        <button type="submit" form="search-bar-form">Search</button>
      </form>
    );
  }
}

export default SearchBar;