import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Favorites from "./components/pages/favorites/Favorites";
import BookList from "./components/pages/home/list-books/BookList";
import Navbar from "./components/navbar/Navbar";
import bookList from "./data/BooksData";
import topBooks from "./data/TopBooksData";
import { useState } from 'react';

function App() {
  const { books } = bookList;
  const { booksTop } = topBooks;
  const [ favoriteBooks, getFavoriteBooks ] = useState([]);

  const onAdd=(book)=>{
    const exist = favoriteBooks.find((x)=> x.id === book.id);
    if(exist){
      getFavoriteBooks(
        favoriteBooks.map((x)=>
        x.id === book.id ? {...exist, qty: exist.qty + 1}: x 
        )
      )
    } else {
      getFavoriteBooks([...favoriteBooks, {...book, qty:1}]);
    }
  }

  const onRemove=(book)=>{
    const exist = favoriteBooks.find((x)=> x.id === book.id);
    if(exist.qty === 1){
      getFavoriteBooks(favoriteBooks.filter((x)=> x.id !== book.id));
    } else{
      getFavoriteBooks(
        favoriteBooks.map((x)=>
        x.id === book.id ? {...exist, qty: exist.qty - 1}: x)
      )
    }
  }

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home booksData={booksTop} onAdd={onAdd} />} />
            <Route path="favorites" element={<Favorites favoriteBooks={favoriteBooks} onRemove={onRemove} />} />
            <Route path="books" element={<BookList booksData={books} onAdd={onAdd} />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
