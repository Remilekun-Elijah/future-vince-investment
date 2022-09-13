import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import Avatar from 'react-avatar';
import Scroller from "../components/Scroller";

const DashNavbar = ({isSignedUp, setIsSignedUp}) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="dash-nav-bg" variant="light" fixed="top">
        <Container className="col ">
          <Navbar.Brand href="#home"><Link className="text-white text-decoration-none" to="./">FutureViceInvestment</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#"><Link className="text-white text-decoration-none" to="./" onClick={e=>setIsSignedUp(false)}>LogOut</Link></Nav.Link>
              <Avatar className="ms-4" googleId="118096717852922241760" size="45" round={true} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

DashNavbar.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func
}
export default DashNavbar;
