import React from 'react';
import './hero.style.scss'

function Hero(props) {
  return (
    <section id='hero' className='hero'>

      <div className="text-box">
        <h1 className='text-box__title title--main '>{props.title}</h1>
        <h2 className='text-box__title title--sub'>{props.subtitle1}<strong>{props.strong}</strong>&nbsp; {props.subtitle2}</h2>
      </div>
      {props.children}
    </section>
  );
}

export default Hero;