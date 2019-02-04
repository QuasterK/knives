import React, {Component} from "react";
import '../scss/About.scss';
import classnames from 'classnames';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      transition: false,
    }
  }
  componentDidMount(){
     window.addEventListener('scroll', this.handleScroll);
    // it is a regular DOM node
    // console.log(this.containerLine.offsetTop)
  }
  componentWillUnMount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = (e) =>  {
    const scroll = window.scrollY;

      if(scroll >= 156){
        this.setState({
          transition: true,
        })
      }
      if(scroll <= 155){
        this.setState({
          transition: false,
        })
      }
    }
  render(){
    const {transition} = this.state;
    return(
      <div className='about' ref={el => this.containerLine = el}>
        <div className='about-container'>
          <section className="about__text">
            <div className={classnames("text-container", transition ? "text-container--transitioned" : null)} onScroll={this.handleScroll}>
              <h1 className="text__header"> Knives are our passion</h1>
              <h2 className="text__header--small"> We make something special </h2>
            </div>
            <div className={classnames("text-container--box",  transition ? "box--transitioned" : null)}>
              <p id="p1" className={classnames("text__paragraph")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum vulputate eleifend. Sed condimentum ligula libero, nec hendrerit dui mollis at. Proin laoreet elementum condimentum. Etiam iaculis ornare metus, eu lobortis tortor. Nullam vitae massa vitae nunc aliquam commodo. Phasellus nulla ipsum, molestie consectetur enim vitae, molestie vehicula ex. Suspendisse vestibulum sagittis ipsum, vel fermentum est auctor in. Phasellus pharetra viverra dolor at lobortis.
              </p>
                <p id="p2" className={classnames("text__paragraph")}>
                Nulla efficitur orci hendrerit auctor lobortis. Donec quis ipsum ex. In nec tempus lacus. Praesent nisl nibh, scelerisque sit amet aliquet et, tristique id est. Nam vel porta elit, a luctus orci. Maecenas at tristique lorem. Phasellus ultricies id nulla et placerat. Aenean id scelerisque metus, eu imperdiet augue. Mauris finibus turpis risus, at fermentum nibh bibendum et.
              </p>
                <p id="p3" className={classnames("text__paragraph")}>
                Quisque dapibus ante accumsan purus vulputate, ut condimentum odio facilisis. Quisque ultrices eleifend sem vitae pulvinar. Etiam neque erat, ornare efficitur dolor sit amet, hendrerit vulputate quam. Fusce quis quam ut purus consectetur ullamcorper eu quis orci.
              </p>

            </div>
          </section>
          <section className="about__image">
            <div  className={classnames("image__picture", transition ? "image__picture--transitioned" : null)}/>
          </section>
        </div>
      </div>
    )
  }
}

export default About;
