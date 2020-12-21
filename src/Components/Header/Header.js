import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";


function Header(props) {
 return (
    <header className="header">
     <nav class="navbar navbar-dark fixed-top bg-primary navbar-expand-md">       
        <h1 className="logo">Kids Zone</h1>
        <ul className="desktop-list ">
         <li><a href="#" >Home</a></li>
         <li><a href="#" >Activities</a></li>
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