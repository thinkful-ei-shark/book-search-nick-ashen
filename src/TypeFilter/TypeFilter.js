import React, { Component } from 'react';

class TypeFilter extends Component {
  handleTypeSelect(e) {
    e.preventDefault();
    this.props.setType(e.target.value);
  }

  render() {
    return (
      <div className="filter-type-container">
        <label htmlFor="filter-print-type">Print Type</label>
        <select id="filter-print-type" onChange={e => this.handleTypeSelect(e)}>
        <option value="all">All</option>
          <option value="book">Books</option>
          <option value="magazine">Magazines</option>
        </select>
      </div>
    );
  }
}

export default TypeFilter;