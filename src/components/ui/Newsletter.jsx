import React from 'react';
import './newsletter.style.scss';

function NewsLetter(props) {
  return (
    <section id='newsletter' className="section-newsletter u-padding-m">
      <h3 className='u-section-title'>our newsletter</h3>
      <form className='section-newsletter__form form' action="#">
        <div className="form__inputs section-newsletter__inputs">
          <div className="form__group section-newsletter__group">
            <label for="email " className=' section-newsletter__label form__group__label' >
              <input
                type="email"
                className="section-newsletter__input form__group__input"
                placeholder='Enter your email address'
                value=""
              />
            </label>
          </div>
        </div>
        {props.children}
      </form>
    </section>
  );
}

export default NewsLetter;