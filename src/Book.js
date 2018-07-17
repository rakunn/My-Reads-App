import React, { Component } from "react";
import ButtonChange from "./ButtonChange";

class Book extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.image})`
              }}
            />
            <ButtonChange
              currentBook={this.props.currentBook}
              updateBooks={this.props.updateBooks}
              defaultShelf={this.props.defaultShelf}
              books={this.props.books}
            />
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    );
  }
}
export default Book;
