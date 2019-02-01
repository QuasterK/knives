import React, {Component} from "react";
import '../scss/Navbar.scss'

class Navbar extends Component {
  render(){
    return <div className="navbar">
      <div className="navbar-container">
        <div className="navbar__logo"> Piotr </div>
        <div className="navbar__buttons">
          <span className="navbar__button">Home</span>
          <span className="navbar__button">About</span>
          <span className="navbar__button">Products</span>
          <span className="navbar__button">Contact</span>
        </div>
      </div>
    </div>
  }
}

export default Navbar;
