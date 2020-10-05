import React, {Component} from 'react';
import MainForm from 'MainForm';

class App extends Component {
  state = {
    search: '',
    type: '',
    rating: ''
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
    // do a fetch or tell booklist to fetch
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