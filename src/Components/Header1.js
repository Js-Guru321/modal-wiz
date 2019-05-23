import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import AppContext from '../AppContext.js';

import './Header.css';
import logo1 from '../Assets/logo1.png';
import profile_image from '../Assets/user.png';
import { 
  Alignment,
  Navbar,
  Button,
  Classes,
  Menu, MenuItem,
  Position, Popover,} from '@blueprintjs/core';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modeButtontext : 'Web View'
    }
  }
  render() {
    return (
      <Navbar className={ Classes.DARK } style={{ height: '80px', 
      backgroundColor: 'rgb( 36, 52, 60 )',
      backgroundImage: 'linear-gradient(75deg, rgb( 36, 52, 60 ), rgb( 60, 90, 100 ))',
      boxShadow: 'none'}}>
        <div className="container d-flex justify-content-between">
          <Navbar.Group align={Alignment.LEFT} style={{ height: '80px' }}>
            <Navbar.Heading>
              <Link to="/" className="navbar-brand"><Logo src={logo1}/> </Link>
            </Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.CENTER} style={{ height: '80px' }}>
            <Popover content={<Menu>
              <MenuItem text="Excel View" onClick={() => this.setState({ modeButtontext: 'Excel View' }) } />
              <MenuItem text="Web View" onClick={() => this.setState({ modeButtontext: 'Web View' }) }/>
            </Menu>} position={Position.BOTTOM}>
              <Button text={ this.state.modeButtontext } rightIcon="caret-down"/>
            </Popover>
            <Button className="bp3-minimal" text="Support" />
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT} style={{ height: '80px' }}>
            <Popover content={<Menu>
              <MenuItem text="Profile" />
              <MenuItem text="Billings"/>
              <MenuItem text="Log out"/>
            </Menu>} position={Position.BOTTOM}>
              <img src={profile_image} style={{ height: '50px' }}/>
            </Popover>
          </Navbar.Group>
        </div>
      </Navbar>
    )
  }
}

Header.contextType= AppContext

export default Header;

const Logo = styled.img`
    height: 4rem;
    margin: 1rem;
`

