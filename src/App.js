import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchSite from "./SearchSite";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBooks = book => {
    this.setState(state => ({
      books: state.books.filter(el => el.title !== book.title).concat([book])
    }));
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route path="/search" render={() => (
              <SearchSite
                books={this.state.books}
                updateBooks={this.updateBooks}
              />
          )} />

        <Route exact path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ListBooks
                books={this.state.books}
                updateBooks={this.updateBooks}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
