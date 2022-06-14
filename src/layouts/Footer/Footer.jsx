import React from 'react';
import './Footer.sass';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__about">
          <a href="#top">
            <div className="to_top">
              <i className="fa fa-arrow-circle-up" />
            </div>
          </a>
          <div className="copyright">
            2022 &copy; Kheda
          </div>
          <a href="#top">
            <div className="to_top">
              <i className="fa fa-arrow-circle-up" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
