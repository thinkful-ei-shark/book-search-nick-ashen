import React, {Component} from 'react';
import MainForm from 'MainForm';

class App extends Component {
  state = {
    search: '',
    type: '',
    rating: '',
    error: ''
  }

  setSearch(search) {
    this.setState({
      search
    });
  }

  setType(type) {
    this.setState({
      type
    });
  }

  setRating(rating) {
    this.setState({
      rating
    });
  }

  componentDidUpdate() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=` + this.state.search
    fetch(url)
      .then(r =>{
        if(!r.ok){
          throw new Error (r.statusText)
        }
        else {
          return r.json
        }
        //title, price, author, pic, shortsum
      })
      .then(rjson => rjson.items.map(item => {
        let book = {}         
        book.title = item.volumeInfo.title
        book.author = item.volumeInfo.authors
        book.price = item.volumeInfo.saleInfo.listPrice.amount
        book.img = item.volumeInfo.imageLinks.thumbnail
        book.summary = item.volumeInfo.description
        book.pageCount = item.volumeInfo.pageCount

        return book
      }))
      .catch(error => this.setState({error}));

      // this.setState({

  }

  render() {
    return (
      <div className="App">
        <header>
            <h1>Google Book Search</h1>
        </header>
        <main>
          <MainForm setSearch={this.setSearch} setType={this.setType} setRating={this.setRating}/>
        </main>
      </div>
    );
  }
}

export default App;