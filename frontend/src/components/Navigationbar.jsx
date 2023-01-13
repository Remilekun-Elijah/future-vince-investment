import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import logo from "../images/vince-logo.png"
import Scroller from "../components/Scroller";

const Navigationbar = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        fixed="top"
      >
        <Container className="col ">
          <Navbar.Brand href="#home">
            <Link className="text-white text-decoration-none" to="./">
             <img className="logo " src={logo}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <Link className="text-white text-decoration-none" to="./">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link
                  className="text-white text-decoration-none"
                  to="/AboutPage"
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link
                  className="text-white text-decoration-none"
                  to="/Login"
                  onClick={(e) => setIsSignedUp(true)}
                >
                  LogIn
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link
                  className="text-white text-decoration-none"
                  to="/SignUp"
                  onClick={(e) => setIsSignedUp(false)}
                >
                  SignUp
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

Navigationbar.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func,
};
export default Navigationbar;
