import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" >AcneShop</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
