import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import SideMenu from './SideMenu';

const logo = require('../static/img/logo.png');

export class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      user: {
        student: {
          name: 'Steven Gresh',
          image: 'students/sgresh.jpg'
        }
      }
    };
  
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleMenuOpen(e) {
    this.setState({open: !this.state.open});
  }

  handleOutsideClick(e) {
    if(e.target.classList[0] !== "hamburger"){
      this.setState({open: false});
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className={this.state.open ? 'content open' : 'content'}>
          <header>
            <Link to="/">
              <img className="logo" src={logo}/>
            </Link>
            <SearchBar />
            <HamburgerMenu open={this.state.open} handleClick={this.handleMenuOpen} />
          </header>
          <div className="app-content">{this.props.children}</div>
          <footer>
          </footer>
        </div>
        <SideMenu open={this.state.open} student={this.state.user.student} active={this.props.activePage} handleOutsideClick={this.handleOutsideClick}/>

      </div>
    );
  }
}

export default Layout;