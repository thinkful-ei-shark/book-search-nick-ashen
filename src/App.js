import React, { Component } from 'react';
import MainForm from './MainForm/MainForm';
import BookList from './BookList/BookList';

class App extends Component {
  state = {
    search: '',
    type: '',
    rating: 0,
    books: [],
    error: null
  }

  setSearch = (search) => {
    this.setState({
      search
    });
  }

  setType = (type) => {
    this.setState({
      type
    });
  }

  setRating = (rating) => {
    this.setState({
      rating
    });
  }

  toggleExpand = (id) => {
    let books = [...this.state.books];
    books = books.map(book => {
      if (book.id === id) {
        book.expanded = !book.expanded;
      }
      return book;
    });
    
    this.setState({
      books
    });
  }

  fetchBooks = () => {
    if(!this.state.search){
      throw new Error('search term empty')
    }

    let url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBeH7luRS-pJMDQ8_dMmLsAzyvxhPYd7nQ&q=` 
      + encodeURIComponent(this.state.search)
      if (this.state.printType){
        url += `&printType=${this.state.type.toUpperCase()}`;
      }

    fetch(url)
      .then(r => {
        if (!r.ok) {
          throw new Error(r.statusText)
        }
        else {
          return r.json()
        }
      })
      .then(rjson => {
        let books = rjson.items.map(item => {
          if (this.state.rating > 0 && item.volumeInfo.averageRating >= this.state.rating
              || this.state.rating === 0) {
            let book = {}
            book.id = item.id;
            book.averageRating = item.volumeInfo.averageRating;
            book.title = item.volumeInfo.title
            book.author = item.volumeInfo.authors
            book.price = item.saleInfo.hasOwnProperty('listPrice') 
              ? item.saleInfo.listPrice.amount : 'Not for sale.'  
            book.img = item.volumeInfo.imageLinks.thumbnail
            book.summary = item.volumeInfo.description
            book.pageCount = item.volumeInfo.pageCount
            book.expanded = false;
            return book
          }
        });
        books = books.filter(book => book);
        this.setState({ books });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div className="error">{this.state.error ? this.state.error.message: ""}</div>
        <main>
          <MainForm fetchBooks={this.fetchBooks} setSearch={this.setSearch} setType={this.setType} setRating={this.setRating} />
          {this.state.books ? <BookList books={this.state.books} toggleExpand={this.toggleExpand} /> : ''}
        </main>
      </div>
    );
  }
}

export default App;