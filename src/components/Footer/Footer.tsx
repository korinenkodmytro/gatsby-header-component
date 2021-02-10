import React from 'react'

import styled, { createGlobalStyle, css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import logoImage from './White-LB-Logo_H.png'

const LinkComp = ({ path, text }) => {
  return (
    <FooterListItem>
      <LinkItem href={path}>{text}</LinkItem>
    </FooterListItem>
  )
}

const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
  }

  body {
  
  font-family: "Poppins", "Helvetica", sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0px;
  font-weight: 400;
  }
  
  .footer-icon {
  color: #fdd149;
  font-size: 20px !important;
  margin-right: 15px;
  height: 1em !important;
  &:hover {
    transition: color 0.2s ease-in-out;
    color: #13a24a
  }
  
}

svg .footer-icon {
  height: 20px;
  font-size:20px;
} 

svg .footer-social-icon {
  height: 14px;
  font-size:14px;
} 

.logo {
  width: 230px;
  height: auto;
}

a {
  color: #a6a6a6;
  font-weight: 400;
  text-decoration: none;
}

ul {
  padding: 0;
  list-style: none;
  display: block;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;}

.contact-link {
  font-weight: 700;
}
`

const FooterComponent = styled.footer`
  background-color: #202020 !important;
  line-height: 24px;
  font-size: 14px;
  border-top: 5px solid #ffd149;
  color: #fff;
`

const Container = styled.div`
  width: 100%;
  padding: 0 5rem;
  flex-wrap: wrap;
  :last-child {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 1290px) {
    max-width: 1000px;
    display: table;
  }
  @media (max-width: 1040px) {
    max-width: 1000px;
    :last-child {
      margin: 0;
      width: 100%;
      padding: 0;
      border-top: solid 1px rgba(255, 255, 255, 0.3);
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    margin: 0;
    padding: 0 auto;
    :last-child {
      border-top: solid 1px rgba(255, 255, 255, 0.3);
      padding-left: 2rem;
    }
  }
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 80px 0;

  @media (max-width: 1040px) {
    max-width: 750px;
    flex-direction: row;
    padding: 80px 0 0 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    max-width: 300px;
    flex-direction: column;
    align-items: normal;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: left;
  @media only screen and (min-width: 480px) and (max-width: 1040px) {
    flex: 50%;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    padding: 20px 0;
  }
`

const FooterHeading = styled.h2`
  font-size: 18px;
  color: #ffffff;
  line-height: 24px;
  letter-spacing: -1px;
  font-weight: 500;
  margin-bottom: 31px;
  text-transform: none;
`

const FooterListItem = styled.li`
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 24px;
  text-transform: none;
`
const LinkItem = styled.a`
  color: rgb(166, 166, 166);

  &:hover {
    transition: color 0.2s ease-in-out;
    color: #13a24a;
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 0;
  /* max-width: 1170px; */
  margin: 0 auto;

  @media only screen and (min-width: 320px) and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 -1rem;
  }
`

const Copyright = styled.div`
  box-sizing: inherit;
  font-size: 13px;
  line-height: normal;
  text-align: center;
  color: #aeb7c1;
  font-weight: 400;
  align-self: center;
  padding: 15px;
`

const SocialIcon = styled.a`
  color: #6d7783;
  margin-right: 1rem;
  &:hover {
    color: white;
  }
`

const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterComponent>
        <Container>
          <FooterTop className='row'>
            <Column>
              <FooterHeading>Contact us</FooterHeading>
              <ul>
                <FooterListItem>
                  <LinkItem className='contact-link' href='tel:8335366627'>
                    <FontAwesomeIcon icon={faPhoneAlt} className='fas fa-phone-alt footer-icon' />
                    833-536-6627
                  </LinkItem>
                </FooterListItem>
                <FooterListItem>
                  <LinkItem className='contact-link' href='mailto:support@lemonbrew.com'>
                    <FontAwesomeIcon icon={faEnvelope} className='fas fa-phone-alt footer-icon' />
                    support@lemonbrew.com
                  </LinkItem>
                </FooterListItem>
              </ul>
            </Column>
            <Column>
              <FooterHeading>What's Brewing?</FooterHeading>
              <ul>
                <LinkComp path='https://www.lemonbrew.com/about-us' text='About Us' />
                <LinkComp path='https://www.lemonbrew.com/blog' text='Blog' />
                <LinkComp path='https://www.lemonbrew.com/faqs' text='FAQ' />
                <LinkComp
                  path='https://www.lemonbrew.com/join-the-brewcrew'
                  text='Join the BrewCrew'
                />
                <LinkComp path='https://www.lemonbrew.com/press' text='Press ' />
              </ul>
            </Column>
            <Column>
              <FooterHeading>Services</FooterHeading>
              <ul>
                <LinkComp
                  path='https://www.lemonbrew.com/realestate'
                  text='LemonBrew Real Estate '
                />
                <LinkComp path='https://www.lemonbrew.com/lending' text='LemonBrew Lending' />
                <LinkComp path='https://www.lemonbrew.com/abstract' text='LemonBrew Abstract' />
                <LinkComp path='https://www.lemonbrew.com/insurance' text='LemonBrew Insurance' />
                <LinkComp path='https://www.lemonbrew.com/agents' text='For Real Estate Agents' />
                <LinkComp path='https://www.lemonbrew.com/lemonbrewpay' text='LemonBrew Pay' />
              </ul>
            </Column>
            <Column>
              <FooterHeading>Legal</FooterHeading>
              <ul>
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
            </Column>
          </FooterTop>
        </Container>
        <Container>
          <FooterBottom className='row'>
            <div>
              <img className='logo' src={logoImage} alt='LemonBrew Logo' />
            </div>
            <div>
              <Copyright>
                {new Date().getFullYear()} LemonBrew Technologies, All Rights Reserved CAL DRE
                2094289
              </Copyright>
            </div>
            <div className='bottom-footer-social'>
              <SocialIcon href='www.facebook.com/lemonbr3w'>
                <FontAwesomeIcon className='footer-social-icon' icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon href='www.instagram.com/lemonbrew'>
                <FontAwesomeIcon className='footer-social-icon' icon={faInstagram} />
              </SocialIcon>

              <SocialIcon href='https://www.linkedin.com/company/lemonbrew/?viewAsMember=true'>
                <FontAwesomeIcon className='footer-social-icon' icon={faLinkedin} />
              </SocialIcon>
            </div>
          </FooterBottom>
        </Container>
      </FooterComponent>
    </>
  )
}

export default Footer
