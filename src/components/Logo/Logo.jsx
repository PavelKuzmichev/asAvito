import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/static/logo/Logo.png'
import { LogoStyled } from './styles'

function Logo({ location }) {
  return (
    <Link to="/">
      <LogoStyled
        src={logo}
        alt="Логотип"
      />
    </Link>
  )
}

export default Logo
