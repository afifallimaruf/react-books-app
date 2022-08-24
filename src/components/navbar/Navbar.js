import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
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
                <NavLink activeClassName="active" to="/favorites" className="link-nav-title nav-hover">
                  FAVORITES
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/books" className="link-nav-title nav-hover">
                  BOOKS
                </NavLink>
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
