import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ButtonChange extends Component {
  
  updateShelf = (e) => {
    const clickedBook = e.target
    BooksAPI.update(this.props.element, clickedBook.value)
    const newBook = this.props.element
    newBook.shelf = clickedBook.value
    this.props.test(this.props.elemet)

  }

  testtt = () => {

  }
  render() {
    
    return(
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} onLoad={this.testtt}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ButtonChange