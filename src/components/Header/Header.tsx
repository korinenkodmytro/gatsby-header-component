import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

// import './header.css'
import logoImage from './White-LB-Logo_H.png'
import logoWhite from './logo_white.png'

// const GlobalStyle = createGlobalStyle`
// /* Import Poppins Font */
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

// /* Change Defautlt style Settings */

// * {
//   margin: 0;
//   padding: 0;
// }

// /* Sticky Header */

// .sticky-activated {
//   background: #fff;
//   transition: ease-in-out 0.5s all;
//   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
// }

// .header-main.sticky-activated .nav-link {
//   color: #6d7783;
// }
// .header-main.sticky-activated .nav-link.active {
//   color: #13a24a;
// }
// .header-main.sticky-activated .nav-link.active span {
//   border-top: 2px solid #13a24a;
// }
// .header-main.sticky-activated .nav-link:hover span {
//   border-top: 2px solid #13a24a;
//   color: #13a24a;
// }

// .header-main.sticky-activated .compnay-logo-white-bg {
//   display: block;
// }

// .header-main.sticky-activated .compnay-logo-dark-bg {
//   display: none;
// }

// /* Animated Hamburger Menu */

// .header-main .menu-icon {
//   cursor: pointer;
//   display: inline-block;
//   padding: 28px 20px;
//   position: relative;
//   user-select: none;
//   display: none;
// }

// .header-main .menu-icon .navicon {
//   background: #13a24a;
//   display: block;
//   height: 2px;
//   position: relative;
//   transition: all 0.2s ease-out;
//   width: 18px;
// }

// .header-main .menu-icon .navicon:before,
// .header-main .menu-icon .navicon:after {
//   background: #13a24a;
//   content: '';
//   display: block;
//   height: 100%;
//   position: absolute;
//   transition: all 0.2s ease-out;
//   width: 100%;
// }

// .header-main .menu-icon .navicon:before {
//   top: 5px;
// }

// .header-main .menu-icon .navicon:after {
//   top: -5px;
// }

// /* menu btn */

// .header-main .menu-btn {
//   display: none;
// }

// .header-main .menu-btn:checked ~ .menu {
//   max-height: 340px;
// }

// .header-main .menu-btn:checked ~ .menu-icon .navicon {
//   background: transparent;
// }

// .header-main .menu-btn:checked ~ .menu-icon .navicon:before {
//   transform: rotate(45deg);
// }

// .header-main .menu-btn:checked ~ .menu-icon .navicon:after {
//   transform: rotate(-45deg);
// }

// .header-main .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
// .header-main .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
//   top: 0;
// }
// .dropdown-arrow:before {
//   content: '\e800';
//   font-family: 'fontello';
//   font-size: 8px;
//   padding-left: 5px;
// }
// `

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

  /* Sticky Header */

  .sticky-activated {
    background: #fff;
    transition: ease-in-out 0.5s all;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  }

  .header-main.sticky-activated .nav-link {
    color: #6d7783;
  }
  .header-main.sticky-activated .nav-link.active {
    color: #13a24a;
  }
  .header-main.sticky-activated .nav-link.active span {
    border-top: 2px solid #13a24a;
  }
  .header-main.sticky-activated .nav-link:hover span {
    border-top: 2px solid #13a24a;
    color: #13a24a;
  }

  .header-main.sticky-activated .compnay-logo-white-bg {
    display: block;
  }

  .header-main.sticky-activated .compnay-logo-dark-bg {
    display: none;
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
      <GlobalStyle />
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
                <NavLink href='https://www.lemonbrew.com/realestate/'>
                  <span>
                    Real Estate
                    <span className='dropdown-arrow' onClick={() => openDropdownHandler()}></span>
                  </span>
                </NavLink>
                <DropdownList className='dropdown-list'>
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
                </DropdownList>
              </Dropdown>
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
