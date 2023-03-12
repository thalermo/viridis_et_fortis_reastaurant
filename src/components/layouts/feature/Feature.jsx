import React from 'react';
import "./feature.style.scss";


function Feature(props) {
  return (
    <section id={props.id} className='feature u-padding-m'>
      <main className="feature__content">
        <h2 className='feature__content__header'>{props.header}</h2>
        <p className='feature__content__text'>{props.text}</p>
      </main>
      <aside className={`feature__img-box ${props.className}`}>
        <img src={props.img} alt="colorful bowl with quinoa, chickpeas and salad" className="feature__img" />
      </aside>
    </section>
  );
}

export default Feature;