import React from "react";
import Card from "../top-books/Card";
import './BookList.css';


const BookList = (props) => {
  const { booksData, onAdd } = props;
  return (
    <div className="list-book">
      <h1 className="top-title">List Books</h1>
      <div className="wrapper">
        {booksData.map((book) => {
          return <div key={book.id} className='book-list'>
            <Card book={book} onAdd={onAdd} text='add' />
          </div>
        })}
      </div>
    </div>
  );
};

export default BookList;
