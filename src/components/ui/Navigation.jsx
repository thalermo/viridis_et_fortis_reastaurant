import React from 'react';
import './navigation.style.scss';
import logoFull from "../../assets/images/full_logo@2x.png";
import logoIcon from "../../assets/images/viridis_logo@2x.png";



function Navigation() {
  return (
    <div class="navigation">
      <input type="checkbox" className="navigation__checkbox" id='navi-toggle' />
      <label for="navi-toggle" className='navigation__button'>
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>


      <nav className='navigation__nav'>
        <a href="#" className="navigation__logos">

          <picture className='navigation__logo'>
            <source srcSet={logoIcon} media='(max-width:60em)' />
            <img srcSet={logoFull} alt="logo of the restaurant" className='navigation__full-logo' />
          </picture>

        </a>
        <ul className="navigation__list">
          <li className="navigation__item"><a href="" className="navigation__link">Book A Table</a></li>
          <li className="navigation__item"><a href="" className="navigation__link">Why Us</a></li>
          <li className="navigation__item"><a href="" className="navigation__link">About Us</a></li>
          <li className="navigation__item"><a href="" className="navigation__link">Meet our Chef</a></li>
          <li className="navigation__item"><a href="" className="navigation__link">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;