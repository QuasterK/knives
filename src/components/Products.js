import React, {Component} from "react";
import '../scss/Products.scss';

class Products extends Component {
  componentDidMount(){
    // console.log(this.containerLine.offsetTop)
  }
  render(){
    return(
      <div className='products' ref={el => this.containerLine = el}>
        <div className='products-container'>
          <div className="products__box">
            <div className="products__product">
              <div className="product__photo">
                <div className="product__price">
                  <p>7.90
                    <span>$</span>
                  </p>
                  </div>
                </div>
              <div className="product__title">
              <h3>Lorem ipsum</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!</p>
          </div>
          <div className="products__product">
            <div className="product__photo">
              <div className="product__price">
                <p>7.90
                  <span>$</span>
                </p>
                </div>
              </div>
            <div className="product__title">
            <h3>Lorem ipsum</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!</p>
        </div>
        <div className="products__product">
          <div className="product__photo">
            <div className="product__price">
              <p>7.90
                <span>$</span>
              </p>
              </div>
            </div>
          <div className="product__title">
          <h3>Lorem ipsum</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!</p>
      </div>
          </div>
          <div className="products__box">
            <div className="products__product">
              <div className="product__photo">
                <div className="product__price">
                  <p>7.90
                    <span>$</span>
                  </p>
                  </div>
                </div>
              <div className="product__title">
              <h3>Lorem ipsum</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!</p>
          </div>
          <div className="products__product">
            <div className="product__photo">
              <div className="product__price">
                <p>7.90
                  <span>$</span>
                </p>
                </div>
              </div>
            <div className="product__title">
            <h3>Lorem ipsum</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!</p>
        </div>
        <div className="products__product">
          <div className="product__photo">
            <div className="product__price">
              <p>7.90
                <span>$</span>
              </p>
              </div>
            </div>
          <div className="product__title">
          <h3>Lorem ipsum</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!</p>
      </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
