import "./Header.css";
import { Navbar, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";
import AuthenticationButton from "../Registration/authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext} from 'react';
import AppContext from '../../auth/AppContext';

const Header = () => {
  const {  isAuthenticated } = useAuth0();
  const myContext = useContext(AppContext);
  const role = myContext !=null && myContext.userData !=null ? myContext.userData.role : localStorage.getItem('role');
  
  //created this function to store the user data in local storage
  const handleClick=() => {
  localStorage.setItem('role', myContext.userData.role);
  localStorage.setItem('user', myContext.user);
  localStorage.setItem('userDate', myContext.userData);
  };


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
                <Nav.Link componentclass={Link} href="/activities" onClick={handleClick}>
                  Activities
                </Nav.Link>
                <Nav.Link componentclass={Link} href="/kidsavailability" onClick={handleClick}>
                  Profile
                </Nav.Link>
                </>
            )

          }
          {isAuthenticated   && (role === 'me') && (
            <>
              <Nav.Link componentclass={Link} href="/profile" onClick={handleClick}>
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


export default Header;
