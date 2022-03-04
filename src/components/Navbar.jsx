import React, { Component } from 'react'

import './styles/Navbar.css'
import logo from '../images/badge-header.svg'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" width="100" src={logo} alt="Logo" />
            <span className="font-weight-light">Academy</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    )
  }
}
