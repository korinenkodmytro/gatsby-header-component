import React from 'react'
import Link from 'gatsby-link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

import logoImage from './White-LB-Logo_H.png'

const LinkComp = ({ path, text }) => {
  return (
    <li className='footer-list-item'>
      <Link className='footer-list-item__link' to={path}>
        {text}
      </Link>
    </li>
  )
}

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row footer-top'>
          <div className='column'>
            <h2 className='footer-header'>Contact us</h2>
            <ul className='footer-list'>
              <li className='footer-list-item'>
                <a href='tel:8335366627' className='footer-list-item__link'>
                  <i className='fas fa-phone-alt footer-list-item__link__icon'></i>
                  833-536-6627
                </a>
              </li>
              <li className='footer-list-item'>
                <a href='mailto:support@lemonbrew.com' className='footer-list-item__link'>
                  <i className='fas fa-envelope footer-list-item__link__icon'></i>
                  support@lemonbrew.com
                </a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h2 className='footer-header'>What's Brewing?</h2>
            <ul className='footer-list'>
              <LinkComp path='/' text='About Us' />
              <LinkComp path='/' text='Blog' />
              <LinkComp path='/' text='FAQ' />
              <LinkComp path='/' text='Join the BrewCrew' />
              <LinkComp path='/' text='Press' />
            </ul>
          </div>
          <div className='column'>
            <h2 className='footer-header'>Services</h2>
            <ul className='footer-list'>
              <LinkComp path='/' text='LemonBrew Real Estate' />
              <LinkComp path='/' text='LemonBrew Lending' />
              <LinkComp path='/' text='LemonBrew Abstract' />
              <LinkComp path='/' text='LemonBrew Insurance' />
              <LinkComp path='/' text='For Real Estate Agents' />
              <LinkComp path='/' text='LemonBrew Pay' />
            </ul>
          </div>
          <div className='column'>
            <h2 className='footer-header'>Legal</h2>
            <ul className='footer-list'>
              <LinkComp path='/' text='Privacy Policy' />
              <LinkComp path='/' text='Terms of Use' />
              <LinkComp path='/' text='Licenses' />
              <LinkComp path='/' text='NMLS Access' />
              <LinkComp path='/' text='Notice to Consumers' />
              <LinkComp path='/' text='Affiliated Business Agreement' />
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='footer-bottom'>
          <div className=''>
            <img className='logo' src={logoImage} alt='LemonBrew Logo' />
          </div>
          <div className=''>
            <div className='footer-bottom__copyright'>
              2020 LemonBrew Technologies, All Rights Reserved CAL DRE 2094289
            </div>
          </div>
          <div className='bottom-footer-social'>
            <a href='www.facebook.com/lemonbr3w' className='bottom-footer-social__icon'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='www.instagram.com/lemonbrew' className='bottom-footer-social__icon'>
              <i className='fab fa-instagram'></i>
            </a>

            <a
              href='https://www.linkedin.com/company/lemonbrew/?viewAsMember=true'
              className='bottom-footer-social__icon'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
