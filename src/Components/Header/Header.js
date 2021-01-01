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
      <Navbar.Brand componentClass={Link} href="/" to="/">
        KiDsZoNe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link componentClass={Link}  href="/">
            Home
        </Nav.Link>
<<<<<<< HEAD
        <Nav.Link componentClass={Link} href="/activityList"  >
=======
        <Nav.Link componentClass={Link} href="/activities" to={ {state: { params:'' }}} >
>>>>>>> origin/main
            Activities
        </Nav.Link>
          <NavDropdown
            className="nav-dropdown"
            title="Mentoring"
            id="collasible-nav-dropdown"
          >
    
            {/* <NavDropdown.Item href="#">Classes</NavDropdown.Item> */}
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
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link componentClass={Link} href="/about">
            About
          </Nav.Link>
          <Nav.Link componentClass={Link} href="#">
            Login/Register
            {/* <FontAwesomeIcon icon={["fas", "sign-out-alt"]} fixedWidth /> */}
          </Nav.Link>
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
