import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const books = this.props.books;
    const currentShelf = this.props.currentShelf;
    const sortedBooks = books.filter(book => currentShelf === book.shelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {sortedBooks.map(book => (
              <Book
                key={book.id}
                title={book.title}
                authors={book.authors ? book.authors : ""}
                currentBook={book}
                image={book.imageLinks ? book.imageLinks.thumbnail : ""}
                updateBooks={this.props.updateBooks}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
