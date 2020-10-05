import React, {Component} from 'react';

class SearchBar extends Component {
  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.setSearch(e.target.value);
  }

  render() {
    return (
      <form id="search-bar-form" onSubmit={e => handleSearchSubmit(e)}>
        <label for="search-bar">Search: </label>
        <input type="text" id="search-bar" placeholder="Henry the Eighth"/>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;