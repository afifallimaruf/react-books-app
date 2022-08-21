import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <Link to="/" className="site-title link-nav-title">
            ReadBooks
          </Link>
          <ul>
            <div className="link-nav">
              <li>
                <Link to="/favorites" className="link-nav-title">
                  FAVORITES
                </Link>
              </li>
              <li>
                <Link to="/books" className="link-nav-title">
                  BOOKS
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
