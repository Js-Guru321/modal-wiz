import React from 'react'
import {Link} from 'react-router-dom';
import { InputGroup, Button, Divider, Toaster, 
    H1, H2, H3, H4, H5, H6, Colors, Classes,
    Card, Elevation,
	Popover, Position,
	Icon, Intent} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as api from "../api"
import * as utils from "../utils"
import AppContext from '../AppContext'
import './Pages.css'
import Curve from '../Assets/curve.png'
import Laptop from '../Assets/laptop.png'
import Icon1 from '../Assets/icon_1.png'
import Icon2 from '../Assets/icon_2.png'
import Icon3 from '../Assets/icon_3.png'
import Icon4 from '../Assets/icon_4.png'
import testimonialsLogo from '../Assets/testimonials-logo.png'
import { LINK } from '@blueprintjs/icons/lib/esm/generated/iconNames';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pricingCondition: 2
        };
    }
    render () {
        return (
            <div>
                <div className='bk-image d-flex flex-column justify-content-end section-1 position-relative'>
                    <div className="position-absolute h-100 w-100 d-flex">
                        <div className="container d-flex flex-column align-items-center justify-content-center">
                            <H6 className="text-center bp3-dark">SERVICE FROM THE EXPERTS</H6>
                            <H1 className="text-center bp3-dark">Strategy & Innovations</H1>
                            <p className="text-center bp3-dark" style={{ letterSpacing: '1px' }}>A financial investment is an asset that you put money into with the hope that it will grow or appreciate into a larger sum of money.</p>
                            <Button style={{ color: Colors.WHITE, backgroundColor: Colors.LIME2, backgroundImage: 'none' }} text="Get Started" large={true}/>
                        </div>
                    </div>
                    <img src={ Curve } className="img-fluid" />
                </div>
                <div className="container who-we-are mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-12 mb-3">
                            <H2>Who We Are</H2>
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart One morning, when Gregor Samsa woke from troubled dreams.</p>
                            <Button style={{ color: Colors.WHITE, backgroundColor: Colors.LIME2, backgroundImage: 'none' }} text="Read More" large={true}/>
                        </div> 
                        <div className="col-lg-6 col-sm-12 col-12">
                            <img src={ Laptop } className="img-fluid"/>
                        </div> 
                    </div>
                </div> 
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <H2 className="text-center">How It Works</H2>
                            <p className="text-center">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart One morning</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12">
                            <Card interactive={true} elevation={Elevation.TWO} style={{ backgroundColor: Colors.DARK_GRAY4, color: Colors.WHITE }} className="mb-3">
                                <H3 style={{color: Colors.WHITE}}><img src={ Icon1 }/>Excel Compatible</H3>
                                <p>We innovate systematically, continuously and successfully innovate systematically, continuously.</p>
                                <Link to="/"  className="menuAnimation" style={{ color: Colors.WHITE, textDecoration: 'none' }}>Read More</Link>
                            </Card>
                            <Card interactive={true} elevation={Elevation.TWO} style={{ backgroundColor: Colors.DARK_GRAY4, color: Colors.WHITE }} className="mb-3">
                                <H3 style={{color: Colors.WHITE}}><img src={ Icon3 }/>Built by Experts</H3>
                                <p>We innovate systematically, continuously and successfully innovate systematically, continuously.</p>
                                <Link to="/"  className="menuAnimation" style={{ color: Colors.WHITE, textDecoration: 'none' }}>Read More</Link>
                            </Card>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12">
                            <Card interactive={true} elevation={Elevation.TWO} style={{ backgroundColor: Colors.DARK_GRAY4, color: Colors.WHITE }} className="mb-3">
                                <H3 style={{color: Colors.WHITE}}><img src={ Icon2 }/>Easy Editing</H3>
                                <p>We innovate systematically, continuously and successfully innovate systematically, continuously.</p>
                                <Link to="/"  className="menuAnimation" style={{ color: Colors.WHITE, textDecoration: 'none' }}>Read More</Link>
                            </Card>
                            <Card interactive={true} elevation={Elevation.TWO} style={{ backgroundColor: Colors.DARK_GRAY4, color: Colors.WHITE }} className="mb-3">
                                <H3 style={{color: Colors.WHITE}}><img src={ Icon4 }/>Fully Customized</H3>
                                <p>We innovate systematically, continuously and successfully innovate systematically, continuously.</p>
                                <Link to="/"  className="menuAnimation" style={{ color: Colors.WHITE, textDecoration: 'none' }}>Read More</Link>
                            </Card>
                        </div>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <H2 className="text-center">Pricing</H2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-12">
                            <Popover content={
                                <div className="w-100">
                                    <p className="mb-0 text-center" style={{ width: '200px' }}>Basic Plan</p>
                                </div>
                            } className={ this.state.pricingCondition == 1 ? 'bp3-dark w-100' : 'w-100' } 
                            onOpening={() => this.setState({ pricingCondition: 1 })} position={Position.TOP}>
                                <Card elevation={Elevation.FOUR} className="d-flex flex-column align-items-center pb-0" style={{ marginBottom: '80px' }}>
                                    <H4 className="text-center my-3">Basic Plan</H4>
                                    <p className="text-center my-0">Features</p>
                                    <p className="text-center my-0">Minimum Deposit $10</p>
                                    <p className="text-center my-0">Maiximum Deposit $10,000</p>
                                    <p className="text-center my-0">Enhanced Security</p>
                                    <p className="text-center my-0">Access to all features</p>
                                    <p className="text-center my-0">24/7 Support</p>
                                    <H4 className="text-center my-0">5.50$</H4>
                                    <p className="text-center my-0">/Month</p>
                                    <Button text="Get Started" large={true} className={ this.state.pricingCondition == 1 ? 'home-pricing-button-hover' : 'home-pricing-button' }/>
                                </Card>
                            </Popover>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12">
                            <Popover content={
                                <div className="w-100">
                                    <p className="mb-0 text-center" style={{ width: '200px' }}>Most Popular</p>
                                </div>
                            } className={ this.state.pricingCondition == 2 ? 'bp3-dark w-100' : 'w-100' } onOpening={() => this.setState({ pricingCondition: 2 })} position={Position.TOP}>
                                <Card  elevation={Elevation.FOUR} className="d-flex flex-column align-items-center pb-0" style={{ marginBottom: '80px' }}>
                                    <H4 className="text-center my-3">Professional Plan</H4>
                                    <p className="text-center my-0">Features</p>
                                    <p className="text-center my-0">Minimum Deposit $10</p>
                                    <p className="text-center my-0">Maiximum Deposit $10,000</p>
                                    <p className="text-center my-0">Enhanced Security</p>
                                    <p className="text-center my-0">Access to all features</p>
                                    <p className="text-center my-0">24/7 Support</p>
                                    <H4 className="text-center my-0">5.50$</H4>
                                    <p className="text-center my-0">/Month</p>
                                    <Button text="Get Started" large={true} className={ this.state.pricingCondition == 2 ? 'home-pricing-button-hover' : 'home-pricing-button' }/>
                                </Card>
                            </Popover>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12">
                            <Popover content={
                                <div className="w-100">
                                    <p className="mb-0 text-center" style={{ width: '200px' }}>Premium Plan</p>
                                </div>
                            }  className={ this.state.pricingCondition == 3 ? 'bp3-dark w-100' : 'w-100' }  onOpening={() => this.setState({ pricingCondition: 3 })} position={Position.TOP}>
                                <Card  elevation={Elevation.FOUR} className="d-flex flex-column align-items-center pb-0" style={{ marginBottom: '80px' }}>
                                    <H4 className="text-center my-3">Premium Plan</H4>
                                    <p className="text-center my-0">Features</p>
                                    <p className="text-center my-0">Minimum Deposit $10</p>
                                    <p className="text-center my-0">Maiximum Deposit $10,000</p>
                                    <p className="text-center my-0">Enhanced Security</p>
                                    <p className="text-center my-0">Access to all features</p>
                                    <p className="text-center my-0">24/7 Support</p>
                                    <H4 className="text-center my-0">5.50$</H4>
                                    <p className="text-center my-0">/Month</p>
                                    <Button text="Get Started" large={true} className={ this.state.pricingCondition == 3 ? 'home-pricing-button-hover' : 'home-pricing-button' }/>
                                </Card>
                            </Popover>
                        </div>
                    </div> 
                </div>
				<div className="container mb-5">
                    <div className="row">
						<div className="col-12">
							<H2 className="text-center">What Our Customers Say</H2>
							<p className="text-center">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart One morning</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="d-flex flex-column align-items-center">
											<img src={ testimonialsLogo } className="mb-3"/>
											<div>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} 
												className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} 
												className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} 
												className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} />
											</div>
											<p style={{ letterSpacing: '1px' }} className="w-75 text-center">Me and my family had a wonderful time on one of the boats they offer. The crew provided us with perfect service. Thanks you guys! We both were so happy and enjoying our days on 
											this yacht.</p>
										</div>
									</div>
									<div className="carousel-item">
										<div className="d-flex flex-column align-items-center">
											<img src={ testimonialsLogo } className="mb-3"/>
											<div>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} />
											</div>
											<p style={{ letterSpacing: '1px' }} className="w-75 text-center">Me and my family had a wonderful time on one of the boats they offer. The crew provided us with perfect service. Thanks you guys! We both were so happy and enjoying our days on 
											this yacht.</p>
										</div>
									</div>
									<div className="carousel-item">
										<div className="d-flex flex-column align-items-center">
											<img src={ testimonialsLogo } className="mb-3"/>
											<div>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} className="mr-3"/>
												<Icon icon={IconNames.STAR} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} style={{ color: Colors.ORANGE5 }} />
											</div>
											<p style={{ letterSpacing: '1px' }} className="w-75 text-center">Me and my family had a wonderful time on one of the boats they offer. The crew provided us with perfect service. Thanks you guys! We both were so happy and enjoying our days on 
											this yacht.</p>
										</div>
									</div>
								</div>
								<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
									<Icon icon={IconNames.CHEVRON_LEFT} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} />
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
									<Icon icon={IconNames.CHEVRON_RIGHT} iconSize={Icon.SIZE_LARGE} intent=	{Intent.PRIMARY} />
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div style={{ backgroundColor: Colors.LIME2, color: Colors.WHITE }}>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center py-4">
								<H2 className="text-center" style={{ color: Colors.WHITE }}>Contact Us Now To Get A Free Quote</H2>
								<Button style={{ color: Colors.LIME2, backgroundColor: Colors.WHITE, backgroundImage: 'none' }} text="Read More" large={true}/>
							</div>
						</div>
					</div>
				</div>
            </div>
        )
    }
}

Home.contextType= AppContext
export default Home