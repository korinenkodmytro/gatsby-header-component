import React, { useEffect } from 'react'

import './header.css'
import logoImage from './White-LB-Logo_H.png'
import logoWhite from './logo_white.png'

const Header = () => {
  // Activates sticky header

  useEffect(() => {
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

  const openDropdownHandler = () => {
    const dropdown = document.querySelector('.dropdown-list')
    if (window.innerWidth < 600) {
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
            <li className='dropdown'>
              <a className='nav-link' href='https://www.lemonbrew.com/'>
                <span>
                  Company{' '}
                  <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                </span>
              </a>
              <ul className='dropdown-list'>
                <li>
                  <a className='nav-link' href='https://www.lemonbrew.com/about-us/'>
                    About Us
                  </a>
                </li>
                <li>
                  <a className='nav-link' href='https://wwww.lemonbrew.com/blog/'>
                    The Brew
                  </a>
                </li>
              </ul>
            </li>

            <li className='dropdown'>
              <a className='nav-link' href='https://www.lemonbrew.com/realestate/'>
                <span>
                  Real Estate
                  <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                </span>
              </a>
              <ul className='dropdown-list'>
                <li>
                  <a className='nav-link' href='https://app.lemonbrew.com/signup/buyer'>
                    Buyer
                  </a>
                </li>
                <li>
                  <a className='nav-link' href='https://app.lemonbrew.com/signup/seller'>
                    Seller
                  </a>
                </li>
                <li>
                  <a className='nav-link' href='https://www.lemonbrew.com/agents/'>
                    For Real Estate Agents
                  </a>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a className='nav-link' href='https://www.lemonbrew.com/lending/'>
                <span>
                  Lending
                  <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                </span>
              </a>
              <ul className='dropdown-list'>
                <li>
                  <a className='nav-link' href='https://www.lemonbrew.com/lending/purchase/'>
                    Purchase
                  </a>
                </li>
                <li>
                  <a className='nav-link' href='https://www.lemonbrew.com/lending/refinance/'>
                    Refinance
                  </a>
                </li>
              </ul>
            </li>

            <li className='dropdown'>
              <a className='nav-link' href='https://www.lemonbrew.com/abstract/'>
                <span>
                  Title Services
                  <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                </span>
              </a>
              <ul className='dropdown-list'>
                <li>
                  <a
                    className='nav-link'
                    href='https://connect.qualia.com/quote-widget/bNTT2kGnbu2J4QqTB/'
                  >
                    Get a Quote
                  </a>
                </li>
                <li>
                  <a className='nav-link' href='https://www.lemonbrew.com/lemonbrewpay/'>
                    Make a Transfer
                  </a>
                </li>
              </ul>
            </li>

            <li className='dropdown'>
              <a className='nav-link' href='https://www.lemonbrew.com/insurance/'>
                <span>
                  Home Insurance
                  <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                </span>
              </a>
              <ul className='dropdown-list'>
                <li>
                  <a
                    className='nav-link'
                    href='https://www1.lemonbrew.com/insurance/get-a-quote-lemonbrew-insurance/'
                  >
                    Get a Quote
                  </a>
                </li>
                <li>
                  <a className='nav-link' href='https://portald22.csr24.com/mvc/893477248'>
                    Client Portal
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className='nav-link' href='https://www.lemonbrew.com/contact-us/'>
                <span>Contact</span>
              </a>
            </li>

            <li className='navButtonLi'>
              <button className='navButton'>
                <a href='tel:8335366627'>Call Us</a>
              </button>
            </li>
          </ul>
        </div>

        <div id='toggle-menu'>
          <input className='menu-btn' type='checkbox' id='menu-btn' onClick={() => toggleMenu()} />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='navicon'></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Header
