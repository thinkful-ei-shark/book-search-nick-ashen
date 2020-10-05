import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TypeFilter from '../TypeFilter/TypeFilter';
import RatingFilter from '../RatingFilter/RatingFilter';

class MainForm extends Component {
  render() {
    return (
      <div id="main-form">
          <SearchBar fetchBooks={this.props.fetchBooks} setSearch={this.props.setSearch}/>
          <TypeFilter fetchBooks={this.props.fetchBooks} setType={this.props.setType}/>
          <RatingFilter fetchBooks={this.props.fetchBooks} setRating={this.props.setRating}/>
      </div>
    )
  }
}

export default MainForm;