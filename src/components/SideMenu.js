import React from 'react';
import { NavLink } from 'react-router-dom';
import Student from './Student';
import { TiHomeOutline, TiDocumentText, TiInfoLargeOutline, TiUserDeleteOutline, TiGroupOutline} from 'react-icons/lib/ti';
import onClickOutside from 'react-onclickoutside';

const hamburgerClass = "hamburger hamburger--collapse";

export class SideMenu extends React.Component {

	constructor(props) {
		super(props);

		this.handleClickOutside = this.handleClickOutside.bind(this);
	}
	handleClickOutside(e) {
		this.props.handleOutsideClick(e);
	}
	render() {
		return (
			<div className={this.props.open ? 'SideMenu open' : 'SideMenu'}>
				<Student displayType="centered menu" student={this.props.student}/>
				<NavLink className="navlink" onClick={this.handleClickOutside} to="/home" activeClassName="activePage"><span><TiHomeOutline /></span>Home</NavLink>
				<NavLink className="navlink" onClick={this.handleClickOutside} to="/admin" activeClassName="activePage"><span><TiGroupOutline /></span>Admin</NavLink>
				<NavLink className="navlink" onClick={this.handleClickOutside} to="/x" activeClassName="activePage"><span><TiDocumentText /></span>Menu Item</NavLink>
				<NavLink className="navlink" onClick={this.handleClickOutside} to="/x" activeClassName="activePage"><span><TiInfoLargeOutline /></span>Help</NavLink>
				<NavLink className="navlink" onClick={this.handleClickOutside} to="/x" activeClassName="activePage"><span><TiUserDeleteOutline /></span>Log Out</NavLink>
			</div>
		);
	}
}

export default onClickOutside(SideMenu);