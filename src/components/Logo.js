import React, { Component } from 'react';
import "../scss/Logo.scss"
import classnames from 'classnames';
class Logo extends Component {
  constructor(props){
    super(props)
    this.state = {
      transition: false,
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
  render() {
    const {transition} = this.state;
    return (
      <div className= {classnames("logo", transition ? "logo--transitioned" : null)} onScroll={this.handleScroll}>
        <div className="logo-container"> Knives </div>
      </div>
    );
  }
}

export default Logo;
