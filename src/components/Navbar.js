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
    const scroll = window.scrollY;
    const windowWidth = window.innerWidth;
    if(windowWidth <= 720){
      if(scroll >= 56){
        this.setState({
          transition: true,
        })
      }
      if(scroll <= 55){
        this.setState({
          transition: false,
        })
      }
    }
  }
  scrollTo = e =>{
    const id = e.target.id
    if(id === 'home'){
      window.scroll(0,0)
    }else if(id === 'about'){
      window.scroll(0, 797)
    }else if(id === 'products'){
      window.scroll(0, 2000)
    }else if(id === 'contact'){
      window.scroll(0,4000)
    }
  }
  render(){
    const {transition} = this.state;

    return <div className= {classnames("navbar", transition ? "navbar--transition" : null)} onScroll={this.handleScroll}>
        <div className="navbar-container">
        <div className="navbar__logo"> Knives </div>
        <div className="navbar__buttons">
          <span id='home' className="navbar__button" onClick={e => this.scrollTo(e)}>Home</span>
          <span id='about' className="navbar__button" onClick={e => this.scrollTo(e)}>About</span>
          <span id='products' className="navbar__button" onClick={e => this.scrollTo(e)}>Products</span>
          <span id='contact' className="navbar__button" onClick={e => this.scrollTo(e)}>Contact</span>
        </div>
      </div>
    </div>
  }
}

export default Navbar;
