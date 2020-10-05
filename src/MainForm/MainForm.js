import React, {Component} from 'react';
import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';
import RatingFilter from './RatingFilter';

class MainForm extends Component {
  render() {
    return (
      <div id="main-form">
          <SearchBar setSearch={this.props.setSearch}/>
          <TypeFilter setType={this.props.setType}/>
          <RatingFilter setRating={this.props.setRating}/>
      </div>
    )
  }
}

export default MainForm;