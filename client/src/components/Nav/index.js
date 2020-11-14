import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/react-portfolio/about">
          Google
        </NavLink>
        
        <ul className="nav nav-tabs ml-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={
                window.location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              >
              saved
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Nav;
