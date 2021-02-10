import React, { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

import logoImage from './White-LB-Logo_H.png'
import logoWhite from './logo_white.png'

type HeaderProps = {
  inverse?: boolean
  logoUrl?: string
}

const GlobalStyle = createGlobalStyle`


  * {
    
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", "Helvetica", sans-serif;
    .dropdown-list__open {
    display: none;
      @media (max-width: 1100px) {
        display: grid;
        visibility:visible !important;
      } 
    }
  }
  
  
  .chevron__open {
    @media (max-width: 1100px) {
      transform: rotate(45deg) !important;
      -webkit-transform: rotate(45deg) !important;
    }
  } 


`
const HeaderMain = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  font-family: Poppins, san-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  padding: 0;
  background: ${(props: any) => (props.inverse ? 'transparent' : 'white')};
  .compnay-logo-white-bg {
    display: none;
  }

  /* Animated Hamburger Menu */

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    display: none;
  }

  .menu-icon .navicon {
    background: #13a24a;
    display: block;
    height: 2px;
    position: relative;
    transition: all 0.2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #13a24a;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */
  .menu-btn {
    display: none;
  }

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
    padding: 1rem 0 1rem 0.5rem;
    height: 90px;
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
    ${(props: any) =>
      props.open
        ? css`
            display: block;
            position: absolute;
            top: 90px;
            left: 0px;
            width: 100%;
            height: 100vh;
          `
        : css`
            display: none;
          `}
  }
`

const NavList = styled.ul`
  list-style: none;
  line-height: 90px;
  margin: 0;
  li {
    display: inline-block;
  }
  @media (max-width: 1100px) {
    background-color: white;
    display: grid;
    text-align: center;
    line-height: 40px;
    a.nav-link {
      color: #293340;
      font-size: 15px;
      font-weight: 700;
      text-transform: none;
      letter-spacing: 0px;
    }
  }
`

const NavLink = styled.a`
  color: ${(props: any) => (props.inverse ? 'white' : ' #6d7783')};
  padding: 0;
  margin: 0 1rem;
  text-decoration: none;

  span {
    padding-top: 10px;
    font-weight: 600;
  }
  @media (min-width: 1100px) {
    &:hover span {
      border-top: ${(props: any) => (props.inverse ? ' 2px solid white' : '2px solid #13a24a')};
      color: ${(props: any) => (props.inverse ? 'white' : ' #13a24a')};
    }
  }
  @media (max-width: 1100px) {
    line-height: 50px;
  }
`

const Dropdown = styled.li`
  position: relative;
  color: white;
  padding: 0;
  @media (min-width: 1100px) {
    &:hover .dropdown-list {
      display: grid;
      visibility: visible;
    }
  }
`
const ChevronDown = styled.i`
  border: ${(props: HeaderProps) => (props.inverse ? 'solid #e5e5e5' : ' solid #6d7783')};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom: 3px;
  margin-left: 5px;
  @media (max-width: 1100px) {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-bottom: 0;
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
  .nav-link {
    color: #6d7783;
  }
  .nav-link:hover {
    color: #13a24a;
  }

  @media (max-width: 1100px) {
    position: relative;
    display: none;
    visibility: hidden;
    top: 0;
    text-align: center;
    padding-top: 0;
    li a.nav-link {
      font-weight: 500;
      color: #617186 !important;
    }
  }
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
  @media (max-width: 1100px) {
    display: none;
  }
`

const Header: React.FC<HeaderProps> = ({
  inverse = false,
  logoUrl = 'https://www.lemonbrew.com/'
}): JSX.Element => {
  const [navContainerOpen, setNavContainerOpen] = useState(false)

  const openDropdownHandler = (event: any) => {
    const dropdown = document.getElementById(`${event.target.id}-dropdown`)
    const chevron = document.getElementById(event.target.id)
    const exists = document.getElementsByClassName('chevron__open')
    if (window.innerWidth < 1100) {
      event.preventDefault()
      console.log(exists ? true : false)
      chevron.classList.toggle('chevron__open')
      dropdown.classList.toggle('dropdown-list__open')
    }
  }

  const toggleMenu = () => {
    setNavContainerOpen(!navContainerOpen)
  }

  return (
    <>
      <GlobalStyle />
      <HeaderMain inverse={inverse} className='header-main'>
        <HeaderContainer>
          <a href={logoUrl}>
            <img src={inverse ? logoImage : logoWhite} alt='LemonBrew Logo' width='200' />
          </a>
          <NavContainer open={navContainerOpen} className='nav-container'>
            <NavList>
              <Dropdown>
                <NavLink inverse={inverse} className='nav-link' href='https://www.lemonbrew.com/'>
                  <span>
                    Company{' '}
                    <ChevronDown
                      inverse={inverse}
                      className='dropdown-arrow'
                      id='company'
                      onClick={(event) => openDropdownHandler(event)}
                    ></ChevronDown>
                  </span>
                </NavLink>
                <DropdownList id='company-dropdown' className='dropdown-list'>
                  <li>
                    <NavLink className='nav-link' href='https://www.lemonbrew.com/about-us/'>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' href='https://www.lemonbrew.com/blog/'>
                      The Brew
                    </NavLink>
                  </li>
                </DropdownList>
              </Dropdown>

              <Dropdown>
                <NavLink
                  inverse={inverse}
                  className='nav-link'
                  href='https://www.lemonbrew.com/realestate/'
                >
                  <span>
                    Real Estate
                    <ChevronDown
                      inverse={inverse}
                      className='dropdown-arrow'
                      id='real-estate'
                      onClick={(event) => openDropdownHandler(event)}
                    ></ChevronDown>
                  </span>
                </NavLink>
                <DropdownList id='real-estate-dropdown' className='dropdown-list'>
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
                <NavLink
                  inverse={inverse}
                  className='nav-link'
                  href='https://www.lemonbrew.com/lending/'
                >
                  <span>
                    Lending
                    <ChevronDown
                      inverse={inverse}
                      id='lending'
                      className='dropdown-arrow'
                      onClick={(event) => openDropdownHandler(event)}
                    ></ChevronDown>
                  </span>
                </NavLink>
                <DropdownList id='lending-dropdown' className='dropdown-list'>
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
                <NavLink
                  inverse={inverse}
                  className='nav-link'
                  href='https://www.lemonbrew.com/abstract/'
                >
                  <span>
                    Title Services
                    <ChevronDown
                      inverse={inverse}
                      id='title-services'
                      className='dropdown-arrow'
                      onClick={(event) => openDropdownHandler(event)}
                    ></ChevronDown>
                  </span>
                </NavLink>
                <DropdownList id='title-services-dropdown' className='dropdown-list'>
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

              <Dropdown className='dropdown'>
                <NavLink
                  inverse={inverse}
                  className='nav-link'
                  href='https://www.lemonbrew.com/insurance/'
                >
                  <span>
                    Home Insurance
                    <ChevronDown
                      inverse={inverse}
                      id='home-insurance'
                      className='dropdown-arrow'
                      onClick={(event) => openDropdownHandler(event)}
                    ></ChevronDown>
                  </span>
                </NavLink>
                <DropdownList id='home-insurance-dropdown' className='dropdown-list'>
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
                </DropdownList>
              </Dropdown>

              <li>
                <NavLink
                  inverse={inverse}
                  className='nav-link'
                  href='https://www.lemonbrew.com/contact-us/'
                >
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
