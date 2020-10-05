import React, { Component } from 'react';

class RatingFilter extends Component {
  handleRatingSelect(e) {
    e.preventDefault();
    this.props.setRating(e.target.value);
  }

  render() {
    return (
      <div className="filter-type-container">
        <label htmlFor="filter-avg-rating">Average Rating</label>
            <select id="filter-avg-rating" onChange={e => this.handleRatingSelect(e)}>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
              <option value={5}>5+</option>
            </select>
      </div>
    );
  }
}

export default RatingFilter;