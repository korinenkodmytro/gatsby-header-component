import React from 'react'
import styled from 'styled-components'

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

const ButtonStyledComponent = () => {
  return (
    <NavButton>
      <a href='tel:8335366627'>Call Us</a>
    </NavButton>
  )
}

export default ButtonStyledComponent
