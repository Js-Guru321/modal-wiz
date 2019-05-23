import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../AppContext.js';

import { 
Alignment,
Button,
Classes,
Colors,
H1, H2, H3, H4, H5, H6,
NavbarDivider,
NavbarGroup,
NavbarHeading,
Divider,
Switch, 
Icon, Intent} from '@blueprintjs/core';
import { IconNames } from "@blueprintjs/icons";

class Footer extends Component {
  render() {
    return (
      <div className="bp3-dark" style={{ backgroundColor: Colors.DARK_GRAY3,
        backgroundColor: 'rgb( 36, 52, 60 )',
        backgroundImage: 'linear-gradient(75deg, rgb( 36, 52, 60 ), rgb( 60, 90, 100 ))' }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-3">
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <p className="my-4" style={{ color: Colors.LIME2 }}>General</p>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Profile</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Billing</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Contact Us</p></Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <p className="my-4" style={{ color: Colors.LIME2 }}>Community</p>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Blog</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Facebook</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Twitter</p></Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <p className="my-4" style={{ color: Colors.LIME2 }}>Legal</p>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Terms of Use</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Privacy Policy</p></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Footer.contextType= AppContext

export default Footer;
