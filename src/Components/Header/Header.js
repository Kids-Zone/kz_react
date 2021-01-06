import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const linkColor = {
    color: "white",
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
      <Navbar.Brand className="logo" componentClass={Link} href="/" to="/">
        KiDsZoNe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link componentClass={Link} href="/">
            Home
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/activities">
            Activities
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/teaching">
            Mentoring
          </Nav.Link>

          <Nav.Link componentClass={Link} href="/about">
            About
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/register">
            SignUp
            {}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
