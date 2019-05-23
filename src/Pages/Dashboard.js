import React from 'react'
import AppContext from '../AppContext'
import './Pages.css';
import {Link} from 'react-router-dom';
import Sidebar from "react-sidebar";
import { Colors, Button } from '@blueprintjs/core';
import 'material-icons/iconfont/material-icons.css';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.style = {
		};
		this.state = {
			sidebarOpen: true
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}
	onSetSidebarOpen(open) {
		if(open == false)
			this.style={
				display: 'none'
			}
		else
			this.style = {};
		this.setState({ sidebarOpen: open });
	}
	render () {
		return (
			<div className='section-1 position-relative'>
				<Sidebar
					sidebar={
						<div className="position-relative">
							<div className="sidebar-mainitem">
								<span class="material-icons" style={{ color: Colors.LIME2, padding: '0 8px' }}>donut_large</span>
								<span style={{ color: Colors.WHITE }}>Assumptions & Drivers</span>
							</div>
							<div className="sidebar-Subitem-Container">
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Accounts Payable</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Accounts Receivable</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Capital Expenditures</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Headcount</Link></Button>
							</div>
							<div className="sidebar-mainitem">
								<span class="material-icons" style={{ color: Colors.LIME2, padding: '0 8px' }}>bar_chart</span>
								<span style={{ color: Colors.WHITE }}>Charts</span>
							</div>
							<div className="sidebar-mainitem">
								<span class="fas fa-file-invoice-dollar" style={{ color: Colors.LIME2, padding: '0 8px', margin: '0 6px' }}></span>
								<span style={{ color: Colors.WHITE }}>Financials</span>
							</div>
							<div className="sidebar-Subitem-Container">
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Balance Sheet</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Cash Flows</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Income Statement</Link></Button>
							</div>
							<div className="sidebar-mainitem">
								<span class="fas fa-users" style={{ color: Colors.LIME2, padding: '0 8px', margin: '0 2px' }}></span>
								<span style={{ color: Colors.WHITE }}>Headcount</span>
							</div>
							<div className="sidebar-mainitem">
								<span class="fas fa-hand-holding-usd" style={{ color: Colors.LIME2, padding: '0 8px', margin: '0 3px' }}></span>
								<span style={{ color: Colors.WHITE }}>Revenue</span>
							</div>
							<div className="sidebar-Subitem-Container">
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Contract</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>B2C</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Sales Reps</Link></Button>
								<Button className="bp3-minimal sidebar-subitem"><Link to='/' style={{ color: Colors.WHITE, textDecoration: 'none' }}>Commissions</Link></Button>
							</div>
							<div className="sidebar-mainitem">
								<span class="material-icons" style={{ color: Colors.LIME2, padding: '0 8px' }}>settings</span>
								<span style={{ color: Colors.WHITE }}>Settings</span>
							</div>
						</div>
					}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
					styles={{ sidebar: { 	backgroundImage: 'linear-gradient(75deg, rgb( 36, 52, 60 ), rgb( 60, 90, 100 ))',
																backgroundColor: 'rgb( 36, 52, 60 )',
																width: '300px' },
										overlay: { display: 'none' } }}
				>
					<div class="small-sidebar-container position-relative">
						<i className="material-icons position-fixed rounded-circle collapse-icon" style={this.style} onClick={() => this.onSetSidebarOpen(false) }>arrow_left</i>
						<div className="small-sidebar-mainitem d-flex justify-content-center align-items-center">
							<i class="material-icons" style={{cursor:'pointer', color: Colors.LIME2}}  onClick={()=> this.onSetSidebarOpen(true)}>donut_large</i>
						</div>
						<div className="small-sidebar-mainitem d-flex justify-content-center align-items-center" style={{ marginTop: '16px'}}>
							<i class="material-icons" style={{cursor:'pointer', color: Colors.LIME2}}  onClick={()=> this.onSetSidebarOpen(true)}>bar_chart</i>
						</div>
						<div className="small-sidebar-mainitem d-flex justify-content-center align-items-center" style={{ marginTop: '16px'}}>
							<i class="fas fa-file-invoice-dollar" style={{cursor:'pointer', color: Colors.LIME2}}  onClick={()=> this.onSetSidebarOpen(true)}></i>
						</div>
						<div className="small-sidebar-mainitem d-flex justify-content-center align-items-center" style={{ marginTop: '16px'}}>
							<i class="fas fa-users" style={{cursor:'pointer', color: Colors.LIME2}}  onClick={()=> this.onSetSidebarOpen(true)}></i>
						</div>
						<div className="small-sidebar-mainitem d-flex justify-content-center align-items-center" style={{ marginTop: '16px'}}>
							<i class="fas fa-hand-holding-usd" style={{cursor:'pointer', color: Colors.LIME2}}  onClick={()=> this.onSetSidebarOpen(true)}></i>
						</div>
						<div className="small-sidebar-mainitem d-flex justify-content-center align-items-center" style={{ marginTop: '16px'}}>
							<i class="material-icons" style={{cursor:'pointer', color: Colors.LIME2}}  onClick={()=> this.onSetSidebarOpen(true)}>settings</i>
						</div>
					</div>
				</Sidebar>
                <iframe width="65%" height="100%" src="https://script.google.com/macros/s/AKfycbz4fOOVbIXgFfsDDsxBheGxvCsPli_QD-S14_YVljN2wnIg7CLg/exec"> </iframe>
			</div>
		)
	}
}

Dashboard.contextType = AppContext
export default Dashboard