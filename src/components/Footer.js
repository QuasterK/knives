import React, { Component } from 'react';
import '../scss/Footer.scss'
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer__col">
            <p> Phone number </p>
            <p> 537 184 441 </p>
          </div>
          <div className="footer__col">
            <p> Address </p>
            <p> 50-501 Wrocław </p>
          </div>
          <div className="footer__col--logo">
            <p> Knives </p>
          </div>
          <div className="footer__col">
            <p> 2019 Piotr Komorowski </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
