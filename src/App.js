import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks';
import ListTitle from './ListTitle';
import SearchSite from './SearchSite';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

 componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
  }

  updateBooks = (book) => {
    this.setState((state) => ({
      books: state.books.filter((el) => el !== book).concat( [book] )
    }))
  }

  test = () => {
    this.setState({ showSearchPage: false })
  }
  
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/search" component={SearchSite} />


     
         
      <Route exact path="/" render={() => (
        <div className="list-books">
            <ListTitle />
            <ListBooks books={this.state.books} updateBooks={this.updateBooks}/>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      )} />
          

      </div>
    )
  }
}

export default BooksApp
