import React from "react";
import bookList from "../../../../data/BooksData";
import Card from "../top-books/Card";
import './BookList.css';


const BookList = () => {
  return (
    <div className="list-book">
      <h1 className="top-title">List Books</h1>
      <div className="wrapper">
        {bookList.map((book, index) => {
          return <Card book={book} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
