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

const Header = () => {
  const { user } = useContext(AuthContext);

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
            <Nav.Link href="#features">Categories</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* User information */}
          <Nav className="align-items-center">
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  roundedCircle
                  style={{ height: "30px" }}
                ></Image>
              ) : (
                <FaUserAlt />
              )}
            </Nav.Link>
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
