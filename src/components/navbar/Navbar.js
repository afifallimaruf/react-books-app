import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title link-nav-title">
          ReadBooks
        </Link>
        <ul>
          <div className="link-nav">
            <li>
              <Link to="/favorites" className='link-nav-title'>FAVORITES</Link>
            </li>
            <li>
              <Link to="/about" className='link-nav-title'>ABOUT</Link>
            </li>
            <li>
              <Link to="/books" className='link-nav-title'>BOOKS</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
