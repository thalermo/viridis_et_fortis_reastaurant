import React from 'react';
import './hero.style.scss'

function Hero({ children }) {
  return (
    <section id='hero' className='hero'>

      <div className="text-box">
        <h1 className='text-box__title title--main '>Viridis et Fortis</h1>
        <h2 className='text-box__title title--sub'>Who says Vegan food Has to be <strong>Boring.</strong>&nbsp;
          Come over and Taste for yourself.</h2>
      </div>
      {children}
    </section>
  );
}

export default Hero;