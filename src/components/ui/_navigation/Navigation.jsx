import React, { useState } from 'react';
import './navigation.style.scss';
import logoFull from "../../../assets/images/full_logo@2x.png";
import logoIcon from "../../../assets/images/viridis_logo@2x.png";


function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation" >
      <input type="checkbox" className={"navigation__checkbox"} id='nav-toggle' />
      <label htmlFor="nav-toggle" className='navigation__button' onClick={() => setIsOpen(!isOpen)} >
        <span className={`navigation__icon ${isOpen && "open"}`}>&nbsp;</span>
      </label>
      <div className={`navigation__background ${isOpen && "open"}`}>&nbsp;</div>


      <nav className={`navigation__nav ${isOpen && "open"}`}>
        <a href="#" className="navigation__logos" onClick={() => setIsOpen(false)}>

          <picture className='navigation__logo'>
            <source srcSet={logoIcon} media='(max-width:75em)' />
            <img srcSet={logoFull} alt="logo of the restaurant" className='navigation__full-logo' />
          </picture>

        </a>
        <ul className="navigation__list" onClick={() => setIsOpen(false)}>
          <li className="navigation__item"><a href="#reservation" className="navigation__link"  >Make a Reservation</a></li>
          <li className="navigation__item"><a href="#why" className="navigation__link">Why Us</a></li>
          <li className="navigation__item"  ><a href="#about" className="navigation__link"  >About Us</a></li>
          <li className="navigation__item" ><a href="#meetChef" className="navigation__link">Meet our Chef</a></li>
          <li className="navigation__item"  ><a href="#contact" className="navigation__link" >Contact Us</a></li>
        </ul>
      </nav>
    </div >
  );
}

export default Navigation;