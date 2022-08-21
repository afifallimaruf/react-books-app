import React from "react";
import Card from "./Card";
import "../Home.css";

const TopBooks = (props) => {
  const { books, onAdd } = props;
  return (
    <div>
      <br />
      <h1 className="top-title">Top Books</h1>
      <div className="wrapper">
        {books.map((book) => {
          return <div key={book.id}>
            <Card book={book} onAdd={onAdd} text='add' />
          </div>
        })}
      </div>
    </div>
  );
};

export default TopBooks;
