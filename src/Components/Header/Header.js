
import './Header.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [isOpen, setOpen] = useState(false);
 return (
    <header className="header">
     <nav class="navbar navbar-dark fixed-top bg-primary navbar-expand-md">       
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
 </header> 
  );
}

export default Header;
