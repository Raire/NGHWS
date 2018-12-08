import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="nav-container">
        <nav>
          <Link className="navbar_link" to="/about">ABOUT US</Link>
          <Link className="navbar_link" to="/service">SERVICES</Link>
          <Link className="navbar_link" to="/contact">CONTACT US</Link>
          <Link className="navbar_link" to="/carinfo">RATES</Link>
          <Link className="navbar_link" to="/appinfo">DOWNLOAD APP</Link>
          <Link className="navbar_link" to="/reservation">RESERVATIONS</Link>
        </nav>
      </div>
    )
  }
}

export default NavBar;
