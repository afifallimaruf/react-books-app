import React from "react";
import topBooks from "../../../../data/TopBooksData";
import Card from "./Card";
import "../Home.css";

const TopBooks = () => {
  return (
    <div>
      <br />
      <h1 className="top-title">Top Books</h1>
      <div className="wrapper">
        {topBooks.map((book, index) => {
          return <Card book={book}/>;
        })}
      </div>
    </div>
  );
};

export default TopBooks;
