import React, {Component} from "react";
import '../scss/Banner.scss';

class Banner extends Component {
  render(){
    return(
      <div className='banner'>
        <div className='banner-container'>
          <span className="banner__text"> This is awesome ! </span>
        </div>
      </div>
    )
  }
}

export default Banner;
