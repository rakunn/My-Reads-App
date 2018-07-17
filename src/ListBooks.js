import React, { Component } from "react";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  render() {
    const shelfs = [
      {
        title: "Currently Reading",
        status: "currentlyReading"
      },
      {
        title: "Read",
        status: "read"
      },
      {
        title: "Want To Read",
        status: "wantToRead"
      }
    ];

    return (
      <div className="list-books-content">
        <div>
          {shelfs.map(shelf => (
            <BookShelf
              books={this.props.books}
              currentShelf={shelf.status}
              title={shelf.title}
              key={shelf.title}
              updateBooks={this.props.updateBooks}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBooks;
