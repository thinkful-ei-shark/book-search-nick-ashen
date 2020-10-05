import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TypeFilter from '../TypeFilter/TypeFilter';
import RatingFilter from '../RatingFilter/RatingFilter';

class MainForm extends Component {
  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.fetchBooks()
  }

  render() {
    return (
      <form id="search-bar-form" onSubmit={e => this.handleSearchSubmit(e)}>
        <div className="search-and-button">
          <SearchBar setSearch={this.props.setSearch} />
          <button type="submit" form="search-bar-form">Search</button>
        </div>
        <TypeFilter setType={this.props.setType} />
        <RatingFilter setRating={this.props.setRating} />
      </form>
    )
  }
}

export default MainForm;