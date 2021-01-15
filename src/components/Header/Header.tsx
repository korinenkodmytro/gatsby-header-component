<<<<<<< HEAD
import React, { useEffect } from 'react'
import Link from 'gatsby-link'

import './header.css'
import logoImage from './White-LB-Logo_H.png'
import logoWhite from './logo_white.png'
=======
import React, { useEffect } from "react";
import Link from "gatsby-link";

import "./header.css";
import logoImage from "./White-LB-Logo_H.png";
import logoWhite from "./logo_white.png";
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab

//Scrolling changes bg color function

const Header = () => {
  // Activates sticky header

  useEffect(() => {
<<<<<<< HEAD
    const header = document.querySelector('.header-main')
    if (window.innerWidth > 600) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0) {
          header.classList.remove('sticky-activated')
        }

        if (window.pageYOffset > 10) {
          header.classList.add('sticky-activated')
        }
      })
    }
  }, [])

  const openDropdownHandler = (event: any) => {
    const dropdown = document.querySelector('.dropdown-list')
    if (window.innerWidth < 600) {
      event.preventDefault()

      dropdown.classList.toggle('dropdown-list__open')
    }
  }

  const toggleMenu = () => {
    const nav = document.querySelector('.nav-container')
    nav.classList.toggle('nav-container__open')
  }

  return (
    <div className='header-main'>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={logoImage} alt='LemonBrew Logo' width='200' className='compnay-logo-dark-bg' />
          <img src={logoWhite} alt='LemonBrew Logo' width='200' className='compnay-logo-white-bg' />
        </div>
        <div className='nav-container'>
          <ul className='nav-list'>
            <li>
              <Link className='nav-link' to='/' activeClassName='active'>
=======
    const header = document.querySelector(".header-main");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        header.classList.remove("sticky-activated");
      }

      if (window.pageYOffset > 10) {
        header.classList.add("sticky-activated");
      }
    });
  }, []);

  const openDropdownHandler = (event: any) => {
    const dropdown = document.querySelector(".dropdown-list");
    if (window.innerWidth < 600) {
      event.preventDefault();

      dropdown.classList.toggle("dropdown-list__open");
    }
  };

  const toggleMenu = (): void => {
    const nav = document.querySelector(".nav-container");
    nav.classList.toggle("nav-container__open");
  };

  return (
    <div className="header-main">
      <div className="header-container">
        <div className="logo-container">
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
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/" activeClassName="active">
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                <span>Company</span>
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link activeClassName='active' className='nav-link ' to='/real-estate'>
=======
              <Link
                activeClassName="active"
                className="nav-link "
                to="/real-estate"
              >
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                <span>Real Estate</span>
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link activeClassName='active' className='nav-link' to='/landing'>
=======
              <Link activeClassName="active" className="nav-link" to="/landing">
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                <span>Landing</span>
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className='nav-link' to='/title-services' activeClassName='active'>
=======
              <Link
                className="nav-link"
                to="/title-services"
                activeClassName="active"
              >
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                <span>Title Services</span>
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className='nav-link' to='/home-insurance' activeClassName='active'>
=======
              <Link
                className="nav-link"
                to="/home-insurance"
                activeClassName="active"
              >
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                <span>Home Insurance</span>
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className='nav-link' to='/contact' activeClassName='active'>
                <span>Contact</span>
              </Link>
            </li>
            <li className='dropdown'>
              <Link className='nav-link' to='' activeClassName='active'>
                <span>
                  Dropdown{' '}
                  <span
                    className='dropdown-arrow'
                    onClick={(event) => openDropdownHandler(event)}
                  ></span>
                </span>
              </Link>
              <ul className='dropdown-list'>
                <li>
                  <Link className='nav-link' to='/test1' activeClassName='active'>
=======
              <Link className="nav-link" to="/contact" activeClassName="active">
                <span>Contact</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="" activeClassName="active">
                <span
                  className="dropdown-arrow"
                  onClick={(event) => openDropdownHandler(event)}
                >
                  Dropdown{" "}
                </span>
              </Link>
              <ul className="dropdown-list">
                <li>
                  <Link
                    className="nav-link"
                    to="/test1"
                    activeClassName="active"
                  >
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                    Test
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link className='nav-link' to='/test2' activeClassName='active'>
=======
                  <Link
                    className="nav-link"
                    to="/test2"
                    activeClassName="active"
                  >
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
                    Test
                  </Link>
                </li>
              </ul>
            </li>
<<<<<<< HEAD
            <li className='navButtonLi'>
              <button className='navButton'>
                <a href='tel:8335366627'>Call Us</a>
=======
            <li className="navButtonLi">
              <button className="navButton">
                <a href="tel:8335366627">Call Us</a>
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
              </button>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <div id='toggle-menu'>
          <input className='menu-btn' type='checkbox' id='menu-btn' onClick={() => toggleMenu()} />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='navicon'></span>
=======
        <div id="toggle-menu">
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            onClick={() => toggleMenu()}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
          </label>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default Header
=======
  );
};

export default Header;
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
