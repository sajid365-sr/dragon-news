import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Logo from "../../../assets/brands/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      className="mb-4 bg-opacity-10"
      collapseOnSelect
      expand="lg"
      bg="dark"
    >
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Dragon News Logo"
            className="me-3"
            width="35px"
          />
          <Link className="text-decoration-none text-dark fw-semibold" to="/">
            Dragon News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Categories</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* User information */}
          <Nav className="align-items-center">
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button
                    className="ms-3"
                    onClick={handleLogOut}
                    variant="light"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <ButtonGroup>
                    <Link className="text-decoration-none me-3" to="/login">
                      <Button variant="outline-dark">Login</Button>
                    </Link>
                    <Link className="text-decoration-none" to="/register">
                      <Button variant="outline-dark">Register</Button>
                    </Link>
                  </ButtonGroup>
                </>
              )}
            </>

            <Link className="ms-3" to='/profile'>
              {user?.photoURL ? (
                <>
                  <Image
                    src={user.photoURL}
                    roundedCircle
                    style={{ height: "35px" }}
                  ></Image>
                </>
              ) : (
                <>
                  <FaUserAlt style={{ transform: "scale(1.3)" }} />
                </>
              )}
            </Link>
          </Nav>

          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
