import React, {Component} from "react";
import '../scss/Home.scss';

class Home extends Component {
  render(){
    return(
      <div className='home'>
        <div className='home__box'>
          <span className="home__text"> Check what's new ! </span>
          <span className="home__button"> SHOP NOW </span>
        </div>
      </div>
    )
  }
}

export default Home;
