import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchSite extends Component {
  state = {
    searchedBooks: [],
    query: ""
  };

  handleInput = e => {
    let searchQuery = e.target.value;
    this.setState({ query: searchQuery.trim() });
  };

  addBooks = query => {
    BooksAPI.search(query)
      .then(books => {
        if (!books.error) {
          books.forEach(book => {
            let booksOnShelfs = this.props.books;
            for (let i = 0; i < booksOnShelfs.length; i++) {
              let searchBook;
              let shelfBook;
              if (book.id === booksOnShelfs[i].id) {
                searchBook = books.indexOf(book);
                shelfBook = booksOnShelfs[i];
                books.splice(searchBook, 1, shelfBook);
              }
            }
            return books;
          });
        } else {
          books = [];
        }

        if (this.state.query === "") {
          books = [];
        }

        return books;
      })
      .then(books => {
        this.setState({ searchedBooks: books });
      });
  };

  render() {
    const defaultShelf = "none";

    if (this.state.query) {
      this.addBooks(this.state.query);
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={process.env.PUBLIC_URL + "/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <Book
                key={book.id}
                title={book.title}
                authors={book.authors ? book.authors : ""}
                currentBook={book}
                image={book.imageLinks ? book.imageLinks.thumbnail : ""}
                updateBooks={this.props.updateBooks}
                defaultShelf={defaultShelf}
                books={this.props.books}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchSite;
