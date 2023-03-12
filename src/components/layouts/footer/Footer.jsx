import React from 'react';
import './footer.style.scss'

function Footer() {
  return (
    <footer className="footer u-padding-s" >
      <section className='footer__section'>
        <h4 className='u-section-title'>location</h4>
        <p className='footer__text'>Thaler Straße 106, Prenzlauer Berg, 10486, Berlin
        </p>
      </section>
      <section className='footer__section'>
        <h4 className='u-section-title'>hours</h4>
        <p className='footer__text'>Monday to Friday 16:00 to 23:00</p>
        <p className='footer__text'>Saturday to Sunday 11:00 to 23:00</p>
      </section>
      <section className='footer__section'>
        <h4 className='u-section-title'>contact</h4>
        <p className='footer__text'>hello@virisidetfortis.com</p>
      </section>

    </footer>
  );
}

export default Footer;