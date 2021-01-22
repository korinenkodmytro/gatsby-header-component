import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import './footer.css'
import logoImage from './White-LB-Logo_H.png'

const LinkComp = ({ path, text }) => {
  return (
    <li className='footer-list-item'>
      <a className='footer-list-item__link' href={path}>
        {text}
      </a>
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
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className='fas fa-phone-alt footer-list-item__link__icon'
                  />
                  833-536-6627
                </a>
              </li>
              <li className='footer-list-item'>
                <a href='mailto:support@lemonbrew.com' className='footer-list-item__link'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className='fas fa-phone-alt footer-list-item__link__icon'
                  />
                  support@lemonbrew.com
                </a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h2 className='footer-header'>What's Brewing?</h2>
            <ul className='footer-list'>
              <LinkComp path='https://www.lemonbrew.com/about-us' text='About Us' />
              <LinkComp path='https://www.lemonbrew.com/blog' text='Blog' />
              <LinkComp path='https://www.lemonbrew.com/faqs' text='FAQ' />
              <LinkComp
                path='https://www.lemonbrew.com/join-the-brewcrew'
                text='Join the BrewCrew'
              />
              <LinkComp path='https://www.lemonbrew.com/press' text='Press ' />
            </ul>
          </div>
          <div className='column'>
            <h2 className='footer-header'>Services</h2>
            <ul className='footer-list'>
              <LinkComp path='https://www.lemonbrew.com/realestate' text='LemonBrew Real Estate ' />
              <LinkComp path='https://www.lemonbrew.com/lending' text='LemonBrew Lending' />
              <LinkComp path='https://www.lemonbrew.com/abstract' text='LemonBrew Abstract' />
              <LinkComp path='https://www.lemonbrew.com/insurance' text='LemonBrew Insurance' />
              <LinkComp path='https://www.lemonbrew.com/agents' text='For Real Estate Agents' />
              <LinkComp path='https://www.lemonbrew.com/lemonbrewpay' text='LemonBrew Pay' />
            </ul>
          </div>
          <div className='column'>
            <h2 className='footer-header'>Legal</h2>
            <ul className='footer-list'>
              <LinkComp path='https://www1.lemonbrew.com/privacy-policy' text='Privacy Policy' />
              <LinkComp path='https://www1.lemonbrew.com/terms-of-use' text='Terms of Use' />
              <LinkComp path='https://www1.lemonbrew.com/licenses' text='Licenses' />
              <LinkComp
                path='http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/198414'
                text='NMLS Access'
              />
              <LinkComp
                path='https://www1.lemonbrew.com/notice-to-consumers'
                text='Notice to Consumers'
              />
              <LinkComp
                path='https://www1.lemonbrew.com/affiliated-businesses'
                text='Affiliated Business Agreement'
              />
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
              <FontAwesomeIcon icon={faFacebookF} className='bottom-footer-social__icon' />
            </a>
            <a href='www.instagram.com/lemonbrew' className='bottom-footer-social__icon'>
              <FontAwesomeIcon icon={faInstagram} className='bottom-footer-social__icon' />
            </a>

            <a
              href='https://www.linkedin.com/company/lemonbrew/?viewAsMember=true'
              className='bottom-footer-social__icon'
            >
              <FontAwesomeIcon icon={faLinkedin} className='bottom-footer-social__icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
