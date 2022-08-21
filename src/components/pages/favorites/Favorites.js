import React from "react";
import ButtonRemove from "../../ButtonRemove";
import "./Favorites.css";

const Favorites = (props) => {
  const { favoriteBooks, onRemove } = props;

  return (
    <div className="favorites">
      <h2 className="favorites-title">Favorites</h2>
      {favoriteBooks.length === 0 && (
        <div className="no-favorites-title">
          <h2>Belum Ada DaftarFavorit</h2>
        </div>
      )}
      <div className="list-book-favorites">
        {favoriteBooks.map((book) => (
          <div className="card-books" key={book.id}>
            <img className="image-favorites" src={book.image} alt="" />
            <h2 className="book-title">{book.name}</h2>
            <ButtonRemove onRemove={onRemove} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
