import React, {Component} from "react";
import '../scss/Home.scss';

class Home extends Component {
  componentDidMount() {
    // it is a regular DOM node
    // console.log(this.containerLine.offsetTop)
    }
  render(){
    return(
      <div className='home' ref={el => this.containerLine = el}>
        <div className='home__box'>
          <span className="home__text"> Check what's new ! </span>
          <span className="home__button"> SHOP NOW </span>
        </div>
      </div>
    )
  }
}

export default Home;
