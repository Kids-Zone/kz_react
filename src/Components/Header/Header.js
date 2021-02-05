import "./Header.css";
import { Navbar, Nav, Form } from "react-bootstrap/";
import { Link } from "react-router-dom";
import AuthenticationButton from "../Registration/authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import AppContext from "../../auth/AppContext";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const myContext = useContext(AppContext);
  const role =
    myContext != null && myContext.userData != null
      ? myContext.userData.role
      : localStorage.getItem("role");

  const { user } = useAuth0();
  const userId = user && user.sub ? user.sub.split("|")[1] : "";

  //created this function to store the user data in local storage
  const handleClick = () => {
    localStorage.setItem("role", myContext.userData.role);
    localStorage.setItem("username", myContext.user.nickname);
    localStorage.setItem("useremail", myContext.user.email);
    localStorage.setItem("userId", userId);
  };

  return (
    <Navbar
      sticky="top"
      style={{
        backgroundColor: "rgba(52, 0, 134, 0.85)",
      }}
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Navbar.Brand className="logo" href="/" to="/">
        KiDsZoNe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {!isAuthenticated && (
            <>
              <Nav.Link componentclass={Link} href="/activities">
                Activities
              </Nav.Link>
              <Nav.Link href="/mentoring">Mentoring</Nav.Link>
            </>
          )}
          {isAuthenticated && role === "ch" && (
            <>
              <Nav.Link
                componentclass={Link}
                href="/activities"
                onClick={handleClick}
              >
                Activities
              </Nav.Link>
              <Nav.Link href="/kidsavailability" onClick={handleClick}>
                Profile
              </Nav.Link>
            </>
          )}
          {isAuthenticated && role === "me" && (
            <>
              <Nav.Link
                componentclass={Link}
                href="/mentorProfile"
                onClick={handleClick}
              >
                Profile
              </Nav.Link>
            </>
          )}
          <Nav.Link componentclass={Link} href="/about">
            About
          </Nav.Link>
        </Nav>
        <Form inline>
          <AuthenticationButton />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
