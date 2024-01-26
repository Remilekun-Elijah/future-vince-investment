import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import logoTwo from '../images/btc-logo.png';
import config from '../utils/config';

const { pageUrls } = config;

const Navigationbar = ({ isSignedUp, setIsSignedUp }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = document.getElementById('navbar').offsetHeight;

      if (scrollY > navbarHeight) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        id="navbar"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="black"
        className={isNavbarFixed ? 'fixed-top' : ''}
      >
        <div className="w-[93%] flex m-auto">
          <Navbar.Brand href="#home">
            <Link className="text-white logo text-decoration-none flex" to="./">
              <img className="" src={logoTwo} alt="Logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-secondary"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="">
                <Link
                  className="text-white text-decoration-none"
                  to={pageUrls.home}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link
                  className="text-white text-decoration-none"
                  to={pageUrls.login}
                  onClick={(e) => setIsSignedUp(true)}
                >
                  LogIn
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link
                  className="text-white text-decoration-none"
                  to={pageUrls.signup}
                  onClick={(e) => setIsSignedUp(false)}
                >
                  SignUp
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

Navigationbar.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func,
};

export default Navigationbar;
