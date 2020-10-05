import React, { Component } from 'react';

class BookItem extends Component {
  render() {
    const expanded = (
      <>
        <p>{this.props.pageCount}</p>
        <p>{this.props.summary}</p>
      </>
    );

    return (
      <li className="book-item" onClick={() => this.props.toggleExpand(this.props.id)}>
        <h2>{this.props.title}</h2>
        <div className="group-row">
          <img src={this.props.img} alt="Book cover image." className="item" />
          <div className="book-details">
            <p>Author: {this.props.author}</p>
            <p>Price: {this.props.price}</p>
          </div>
          {this.props.expanded ? expanded : ''}
        </div>
      </li>
    );
  }
}

export default BookItem;