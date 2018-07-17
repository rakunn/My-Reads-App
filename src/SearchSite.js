import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchSite extends Component {
  state = {
    searchedBooks: []
  };

  addBooks = () => {
    BooksAPI.search("a")
      .then(books => {
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
        return books;
      })
      .then(books => {
        this.setState({ searchedBooks: books });
      });
  };

  render() {
    const defShelf = "none";
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <Book
                key={book.id}
                title={book.title}
                authors={book.authors}
                currentBook={book}
                image={book.imageLinks.thumbnail}
                updateBooks={this.props.updateBooks}
                defaultShelf={defShelf}
                books={this.props.books}
              />
            ))}
          </ol>
        </div>
        <button onClick={this.addBooks}>TUUUUUU</button>
      </div>
    );
  }
}

export default SearchSite;