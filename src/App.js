import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Favorites from "./components/pages/favorites/Favorites";
import BookList from "./components/pages/home/list-books/BookList";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
            <Route path="books" element={<BookList />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
