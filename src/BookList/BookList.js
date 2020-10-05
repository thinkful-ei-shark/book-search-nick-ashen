import React, {Component} from 'react';
import BookItem from '../BookItem/BookItem';

class BookList extends Component {
  render() {
    console.log('books', this.props.books);
    const books = this.props.books.map((book) => {
      console.log(book);
      return <BookItem key={book.id} id={book.id} title={book.title} author={book.author} 
        price={book.price} img={book.img} summary={book.summary} pageCount={book.pageCount} 
        expanded={book.expanded} toggleExpand={this.props.toggleExpand} />
    });

    return (
      <ul className="book-list">
        {books}
      </ul>
    );
  }
}

export default BookList;