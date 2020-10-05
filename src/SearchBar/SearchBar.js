import React, {Component} from 'react';

class SearchBar extends Component {
  handleSearchChange(e) {
    e.preventDefault();
    this.props.setSearch(e.target.value);
  }

  render() {
    return (
      <div className="search-bar-container">
        <label htmlFor="search-bar">Search: </label>
        <input type="text" id="search-bar" placeholder="Henry the Eighth" name="search" onChange={(e) => this.handleSearchChange(e)}/>
      </div>
    );
  }
}

export default SearchBar;