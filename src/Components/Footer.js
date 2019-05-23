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
      <div className="bp3-dark" style={{ backgroundColor: Colors.DARK_GRAY3 }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-3">
              <H2 className="my-4">General</H2>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Get started</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Log in</p></Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <H2 className="my-4">Get Started</H2>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Free Trial</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>How it works</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Pricing</p></Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <H2 className="my-4">Legal</H2>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Terms of Use</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }>Privacy Policy</p></Link>
            </div>
            <div className="col-12 col-sm-12 col-lg-3">
              <H2 className="my-4">Contact</H2>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }><Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.WHITE }}/> (703) 349-2690</p></Link>
              <Link to='/' className="footermenuitem"><p className={ Classes.DARK }><Icon icon={IconNames.ENVELOPE} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.WHITE }}/> model@modelwiz.com</p></Link>
            </div>
          </div>
          <hr/>
          <div className="my-2 text-center">
            <ul className="list-group list-group-horizontal justify-content-center">
              <li class="bg-transparent border-0 list-group-item mr-3">
                <Link to='/' className="footermenuitem">
                  <span iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.WHITE, width: '40px', height: '40px', backgroundColor: Colors.LIME2 }} className="d-flex justify-content-center align-items-center rounded-circle fab fa-facebook-f" />
                </Link>
              </li>
              <li class="bg-transparent border-0 list-group-item mr-3">
                <Link to='/' className="footermenuitem">
                  <span iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.WHITE, width: '40px', height: '40px', backgroundColor: Colors.LIME2 }} className="d-flex justify-content-center align-items-center rounded-circle fab fa-twitter" />
                </Link>
              </li>
              <li class="bg-transparent border-0 list-group-item">
                <Link to='/' className="footermenuitem">
                  <span iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.WHITE, width: '40px', height: '40px', backgroundColor: Colors.LIME2 }} className="d-flex justify-content-center align-items-center rounded-circle 	fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Footer.contextType= AppContext

export default Footer;
