import "./Header.css";
import { Navbar, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";
import AuthenticationButton from "../Registration/authentication-button";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();

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
          {isAuthenticated && (
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


export default Header;
