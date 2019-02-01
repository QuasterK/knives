import React, {Component} from "react";
import '../scss/Navbar.scss';
import classnames from 'classnames';
class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      transition: false,
      transitionBack: false
    }
  }
  componentDidMount(){
     window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnMount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = (e) =>  {
    // const {transition, transitionBack} = this.state;

    var scroll = window.scrollY;
    if(scroll >= 56){
      this.setState({
        transition: true,
        transitionBack: false
      })
    }
    if(scroll <= 55){
      this.setState({
        transition: false,
        transitionBack: true
      })
    }
  }
  render(){
    const {transition} = this.state;

    return <div className= {classnames("navbar", transition ? "navbar--transition" : null)} onScroll={this.handleScroll}>
        <div className="navbar-container">
        <div className="navbar__logo"> Knives </div>
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
