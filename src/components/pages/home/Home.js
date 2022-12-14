import React from "react";
import "./Home.css";
//import topBooks from "../../../data/TopBooksData";
import TopBooks from "./top-books/TopBooks";

const Home = (props) => {
  const { booksData, onAdd } = props;
  return (
    <>
      <div className="text-intro myBg">
        <div className="text-style">
          Ayo Baca Buku
          <div>Di ReadBooks</div>
        </div>
      </div>
      <div className="trending-section">
       <TopBooks books={booksData} onAdd={onAdd} />
      </div>
    </>
  );
};

export default Home;
