import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ButtonChange extends Component {
  
  updateShelf = (e) => {
    const clickedBook = e.target
    console.log(e.target.options)
    BooksAPI.update(this.props.element, clickedBook.value)
    const newBook = this.props.element
    newBook.shelf = clickedBook.value
    this.props.test(this.props.elemet)

  }
/*
  componentDidMount() {
    
    console.log("mount")
  }
  testtt = () => {
    const select = Array.from(document.querySelector(".selectButton").options)
    for(var option in select) {

      console.log(select[option].value, this.props.element.shelf)
      console.log(this.props.element.title)
      if (select[option].value == `"${this.props.element.shelf}"`) {
        select[option].setAttribute("selected", true)
      }
    }
  } */
  render() {
    const val = this.props.element.shelf
    console.log(val)
    return(
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} value={val} className="selectButton">
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