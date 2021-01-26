import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

// import './header.css'
import logoImage from './White-LB-Logo_H.png'
import logoWhite from './logo_white.png'

const HeaderMain = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  padding: 0;

  .menu-btn:checked ~ .menu {
    max-height: 340px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  @media (max-width: 1100px) {
    background-color: white;
    padding: 1rem 0;
    .compnay-logo-white-bg {
      display: block;
      width: 150px;
      padding-left: 1rem;
    }
    .compnay-logo-dark-bg {
      display: none;
    }
    .menu-icon {
      display: block;
    }
  }
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`
const NavContainer = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
`
const NavList = styled.ul`
  list-style: none;
  line-height: 90px;
  margin: 0;
  li {
    display: inline-block;
  }
`
const Dropdown = styled.li`
  position: relative;
  color: white;
  padding: 0;
`

const NavLink = styled.a`
  color: white;
  padding: 0;
  margin: 0 1rem;
  text-decoration: none;
  &:hover span {
    border-top: 2px solid white;
  }
  span {
    padding-top: 10px;
    font-weight: 600;
  }
`

const DropdownArrow = styled.span`
  @font-face {
    font-family: 'fontello';
    src: url('.//fontello.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  &::before {
    content: '\e800';
    font-family: 'fontello';
    font-size: 8px;
    padding-left: 5px;
  }
`

const DropdownList = styled.ul`
  position: absolute;
  list-style: none;
  width: auto;
  display: none;
  top: 90px;
  left: 0px;
  margin-left: -1px;
  margin-top: 0px;
  min-width: 13em;
  background: white;
  padding: 17px;
  font-size: 12px;
  font-weight: 400;
  text-transform: none;
  line-height: 30px;
  white-space: nowrap;
`

const NavButton = styled.button`
  transition: all ease 0.5s;
  color: #4d4d4f;
  font-family: Poppins;
  border-radius: 100px;
  margin-left: 1rem;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 38px;
  width: 130px;
  background-color: #ffd149;
  border: 1px solid #ffd149;
  a {
    text-decoration: none;
    color: #4d4d4f;
    font-weight: 600;
  }
  &:hover {
    background-color: transparent;
  }
  &:hover a {
    color: #ffd149;
  }
`

const ToggleMenu

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
    <>
      {/* <GlobalStyle /> */}
      <HeaderMain className='header-main'>
        <HeaderContainer>
          <div>
            <img
              src={logoImage}
              alt='LemonBrew Logo'
              width='200'
              className='compnay-logo-dark-bg'
            />
            <img
              src={logoWhite}
              alt='LemonBrew Logo'
              width='200'
              className='compnay-logo-white-bg'
            />
          </div>
          <NavContainer>
            <NavList>
              <Dropdown>
                <NavLink className='nav-link' shref='https://www.lemonbrew.com/'>
                  <span>
                    Company <DropdownArrow onClick={() => openDropdownHandler()}></DropdownArrow>
                  </span>
                </NavLink>
                <DropdownList className='dropdown-list'>
                  <li>
                    <NavLink className='nav-link' href='https://www.lemonbrew.com/about-us/'>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' href='https://wwww.lemonbrew.com/blog/'>
                      The Brew
                    </NavLink>
                  </li>
                </DropdownList>
              </Dropdown>

              <Dropdown>
                <NavLink className='nav-link' href='https://www.lemonbrew.com/realestate/'>
                  <span>
                    Real Estate
                    <DropdownArrow
                      className='dropdown-arrow'
                      onClick={() => openDropdownHandler()}
                    ></DropdownArrow>
                  </span>
                </NavLink>
                <DropdownList className='dropdown-list'>
                  <li>
                    <NavLink className='nav-link' href='https://app.lemonbrew.com/signup/buyer'>
                      Buyer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' href='https://app.lemonbrew.com/signup/seller'>
                      Seller
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' href='https://www.lemonbrew.com/agents/'>
                      For Real Estate Agents
                    </NavLink>
                  </li>
                </DropdownList>
              </Dropdown>
              <Dropdown className='dropdown'>
                <NavLink className='nav-link' href='https://www.lemonbrew.com/lending/'>
                  <span>
                    Lending
                    <DropdownArrow
                      className='dropdown-arrow'
                      onClick={() => openDropdownHandler()}
                    ></DropdownArrow>
                  </span>
                </NavLink>
                <DropdownList className='dropdown-list'>
                  <li>
                    <NavLink
                      className='nav-link'
                      href='https://www.lemonbrew.com/lending/purchase/'
                    >
                      Purchase
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='nav-link'
                      href='https://www.lemonbrew.com/lending/refinance/'
                    >
                      Refinance
                    </NavLink>
                  </li>
                </DropdownList>
              </Dropdown>

              <Dropdown className='dropdown'>
                <NavLink className='nav-link' href='https://www.lemonbrew.com/abstract/'>
                  <span>
                    Title Services
                    <DropdownArrow
                      className='dropdown-arrow'
                      onClick={() => openDropdownHandler()}
                    ></DropdownArrow>
                  </span>
                </NavLink>
                <DropdownList className='dropdown-list'>
                  <li>
                    <NavLink
                      className='nav-link'
                      href='https://connect.qualia.com/quote-widget/bNTT2kGnbu2J4QqTB/'
                    >
                      Get a Quote
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' href='https://www.lemonbrew.com/lemonbrewpay/'>
                      Make a Transfer
                    </NavLink>
                  </li>
                </DropdownList>
              </Dropdown>

              <li className='dropdown'>
                <NavLink className='nav-link' href='https://www.lemonbrew.com/insurance/'>
                  <span>
                    Home Insurance
                    <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                  </span>
                </NavLink>
                <ul className='dropdown-list'>
                  <li>
                    <NavLink
                      className='nav-link'
                      href='https://www1.lemonbrew.com/insurance/get-a-quote-lemonbrew-insurance/'
                    >
                      Get a Quote
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' href='https://portald22.csr24.com/mvc/893477248'>
                      Client Portal
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink className='nav-link' href='https://www.lemonbrew.com/contact-us/'>
                  <span>Contact</span>
                </NavLink>
              </li>

              <li>
                <NavButton>
                  <a href='tel:8335366627'>Call Us</a>
                </NavButton>
              </li>
            </NavList>
          </NavContainer>

          <div id='toggle-menu'>
            <input
              className='menu-btn'
              type='checkbox'
              id='menu-btn'
              onClick={() => toggleMenu()}
            />
            <label className='menu-icon' htmlFor='menu-btn'>
              <span className='navicon'></span>
            </label>
          </div>
        </HeaderContainer>
      </HeaderMain>
    </>
  )
}

export default Header
