import React from "react";
import bookList from "../../../data/BooksData";
import "./Favorites.css";

const Favorites = () => {
  const favorites = [];
  if (favorites.length >= 1) {
    return (
      <div className="favorite">
        <h1>Favorites</h1>
        <div className=" favorite book-list">
          {bookList.map((index) => {
            return (
              <img src={index.image} alt="books" height="100" width="100" />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-favorites">
        <h1>Belum Ada Daftar Favorites</h1>
      </div>
    );
  }
};

export default Favorites;
