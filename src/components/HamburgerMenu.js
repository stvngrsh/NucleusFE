import React from 'react';
import SideMenu from './SideMenu';

const hamburgerClass = "hamburger hamburger--collapse";

export class HamburgerMenu extends React.Component {

	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			<div className="HamburgerMenu">
				<button onClick={this.props.handleClick} className={this.props.open ? hamburgerClass + ' is-active' : hamburgerClass} >
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
		);
	}
}

export default HamburgerMenu;