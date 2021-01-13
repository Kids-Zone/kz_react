import "./Header.css";

import { Navbar, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";
import AuthenticationButton from "../Registration/authentication-button";

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
          {/* <NavDropdown
            className="nav-dropdown"
            title="Mentoring"
            id="collasible-nav-dropdown"
          > */}
          {/* <NavDropdown.Item href="#">Classes</NavDropdown.Item> */}

          {/* <NavDropdown.Item
              componentClass={Link}
              href="/teaching"
              to="/teaching"
            >
              Teaching
            </NavDropdown.Item> */}

          {/* <NavDropdown.Item
              componentClass={Link}
              href="/register"
              to="/register"
            >
              Sign Up
            </NavDropdown.Item> */}
          {/*
            <NavDropdown.Divider />
             <NavDropdown.Item
              componentClass={Link}
              href="/classes"
              to="/classes"
            >
              Classes
            </NavDropdown.Item> 
             <NavDropdown.Divider />
            <NavDropdown.Item
              componentClass={Link}
              href="/availability"
              to="/availability"
            >
              Availability
            </NavDropdown.Item> */}
          {/* </NavDropdown> */}
          <Nav.Link componentClass={Link} href="/about">
            About
          </Nav.Link>
          {/* <Nav.Link componentClass={Link} href="/register">
            SignUp
            {/* <FontAwesomeIcon icon={["fas", "sign-out-alt"]} fixedWidth /> 
          </Nav.Link> */}
          {/* <Nav.Link componentClass={Link} href="/sign-in">
            Sign in
            {/* <FontAwesomeIcon icon={["fas", "sign-out-alt"]} fixedWidth /> */}
          {/* </Nav.Link> */}
          {/* <Nav.Link componentClass={Link} href="/sign-up">
            Sign Up
            {/* <FontAwesomeIcon icon={["fas", "sign-out-alt"]} fixedWidth /> */}
          {/*</Nav.Link> */}
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
