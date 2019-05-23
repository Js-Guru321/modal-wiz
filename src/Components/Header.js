import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import AppContext from '../AppContext.js';

import './Header.css';
import logo from '../Assets/logo.png';
import bk_image from '../Assets/slider.jpg';

import { 
  Alignment,
  Button,
  Classes,
  Colors,
  H1, H2, H3, H4, H5, H6,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch, } from '@blueprintjs/core';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100 menuBkcolor">
        <div className="container">
          <Link to="/" className="navbar-brand"><Logo src={logo}/> </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to='/' className="nav-link menuAnimation"><H5 className={ Classes.DARK }>Home</H5></Link>
              </li>
              <li className="nav-item">
                <Link to='how-it-works' className="nav-link menuAnimation"><H5 className={ Classes.DARK }>How it Works</H5></Link>
              </li>
              <li className="nav-item">
                <Link to='/pricing' className="nav-link menuAnimation"><H5 className={ Classes.DARK }>Pricing</H5></Link>
              </li>
              <li className="nav-item">
                <Link to='/blog' className="nav-link menuAnimation"><H5 className={ Classes.DARK }>Blog</H5></Link>
              </li>
              <li className="nav-item">
                <Link to='/contact-us' className="nav-link menuAnimation"><H5 className={ Classes.DARK }>Contact Us</H5></Link>
              </li>

              <li className="nav-item">
                <Link to='/register' className="nav-link bp3-button bp3-large btn-custom"
                style={{ color: Colors.WHITE, backgroundColor: Colors.LIME2, backgroundImage: 'none' }}>Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Header.contextType= AppContext

export default Header;

const Logo = styled.img`
    height: 4rem;
    margin: 1rem;
`

