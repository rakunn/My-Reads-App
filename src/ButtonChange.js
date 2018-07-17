import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class ButtonChange extends Component {
  updateShelf = e => {
    const clickedBookShelf = e.target.value;
    const curBook = this.props.currentBook;
    BooksAPI.update(curBook, clickedBookShelf);
    curBook.shelf = clickedBookShelf;
    this.props.updateBooks(curBook);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.updateShelf}
          value={
            this.props.currentBook.shelf
              ? this.props.currentBook.shelf
              : this.props.defaultShelf
          }
          className="selectButton"
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ButtonChange;
