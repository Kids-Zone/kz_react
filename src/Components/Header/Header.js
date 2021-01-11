import "./Header.css";
import { Navbar, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Nav.Link componentclass={Link} href="/activities">
            Activities
          </Nav.Link>
          <Nav.Link componentclass={Link} href="/mentoring">
            Mentoring
          </Nav.Link>

          <Nav.Link componentclass={Link} href="/about">
            About
          </Nav.Link>
          <Nav.Link componentclass={Link} href="/register">
            SignUp
            {}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
