import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";
import AuthenticationButton from "../Registration/authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext} from 'react';
import AppContext from '../../auth/AppContext';

const Header = () => {
  const {  isAuthenticated } = useAuth0();
  const myContext = useContext(AppContext);
  const role = myContext !=null && myContext.userData !=null ? myContext.userData.role : '';
  return (
    <Navbar
      sticky="top"
      style={{
        backgroundColor: "rgba(52, 0, 134, 0.85)",
      }}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand className="logo" componentclass={Link} href="/" to="/">
        KiDsZoNe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link componentclass={Link} href="/">
            Home
          </Nav.Link>
          {!isAuthenticated && (
            <>
              <Nav.Link componentclass={Link} href="/activities">
                Activities
              </Nav.Link>
              <Nav.Link componentclass={Link} href="/mentoring">
                Mentoring
              </Nav.Link>
            </>
          )}
          {isAuthenticated && (role === 'ch') &&
            (
              <>
                <Nav.Link componentclass={Link} href="/activities">
                  Activities
                </Nav.Link>
                <Nav.Link componentclass={Link} href="/kidsavailability">
                  Profile
                </Nav.Link>
                </>
            )

          }
          {isAuthenticated   && (role === 'me') && (
            <>
              <Nav.Link componentclass={Link} href="/profile">
                Profile
              </Nav.Link>
              
            </>
          )}
          <Nav.Link componentClass={Link} href="/about">
            About
          </Nav.Link>
          <AuthenticationButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// function Header(props) {
//   return (
//     <header className="header">
//       <nav class="navbar navbar-dark fixed-top bg-primary navbar-expand-md">
//         <h1 className="logo">Kids Zone</h1>
//         <ul className="desktop-list ">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">Activities</a>
//           </li>
//           <li>
//             <a href="#">Mentoring</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Login/Register</a>
//           </li>
//         </ul>
//         <ul className="mobile-list ">
//           <i class="fa fa-home"></i>
//           <i class="fa fa-cogs"></i>
//           <i class="fas fa-chalkboard-teacher"></i>
//           <i class="fa fa-info"></i>
//           <i class="fa fa-users"></i>
//         </ul>
//       </nav>
//     </header>
//   );
// }

export default Header;
