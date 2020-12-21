
import './Header.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="header">
     <nav className="navbar ">
        <h1 className="logo">Kids Zone</h1>
        <ul className="desktop-list ">
         <li><a href="index.html" >Home</a></li>
         <li><a href="allActivityCategory.html" >Activities</a></li>
         <li><a href="#" >About</a></li>
         <li><a href="#" >Login/Register</a></li>
        </ul>
        <ul className="mobile-list ">
         <li><FontAwesomeIcon icon={faHome}/></li>
     </ul>
    </nav> 
    {/* <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              Actvities
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/mentoring"
            >
              Mentoring
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav> */}
 </header> 
  );
}

export default Header;
