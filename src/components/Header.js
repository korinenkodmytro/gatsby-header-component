import React, { useEffect } from "react";
import logoImage from "../images/White-LB-Logo_H.png";
import logoWhite from "../images/logo_white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import { Navbar, NavDropdown, Form, Button, Container } from "react-bootstrap";
import "../styles/partials/Header.scss";

//Scrolling changes bg color function

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("#header-main");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        header.classList.remove("sticky-activated");
      }

      if (window.pageYOffset > 10) {
        header.classList.add("sticky-activated");
      }
    });
  }, []);

  const openDropdownHandler = (event) => {
    const dropdown = document.querySelector(".dropdown-list");
    if (window.innerWidth < 600) {
      event.preventDefault();
      console.log(event.target);

      dropdown.classList.toggle("dropdown-list__open");
    }
  };

  return (
    <Navbar
      bg=""
      expand="lg"
      className="header-main"
      id="header-main"
      sticky="top"
    >
      <Container fluid className="header-container">
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            alt="LemonBrew Logo"
            width="200"
            className="compnay-logo-dark-bg"
          />
          <img
            src={logoWhite}
            alt="LemonBrew Logo"
            width="200"
            className="compnay-logo-white-bg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/" activeClassName="active">
                <span>Company</span>
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                className="nav-link "
                to="/real-estate"
              >
                <span>Real Estate</span>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" className="nav-link" to="/landing">
                <span>Landing</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/title-services"
                activeClassName="active"
              >
                <span>Title Services</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/home-insurance"
                activeClassName="active"
              >
                <span>Home Insurance</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact" activeClassName="active">
                <span>Contact</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="" activeClassName="active">
                <span>
                  Dropdown{" "}
                  <span
                    onClick={(event) => openDropdownHandler(event)}
                    className="dropdown-arrow"
                  >
                    &#11206;
                  </span>
                </span>
              </Link>
              <ul className="dropdown-list">
                <li>
                  <Link
                    className="nav-link"
                    to="/test1"
                    activeClassName="active"
                  >
                    Test
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/test2"
                    activeClassName="active"
                  >
                    Test
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <Form inline>
            <Button variant="warning navButton">
              <a href="tel:8335366627">833-536-6627</a>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
