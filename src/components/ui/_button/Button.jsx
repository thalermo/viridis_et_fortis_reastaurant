import React from 'react';
import './button.style.scss';

function Button(props) {

  return (
    <button type={props.type} className={props.className}>
      {props.text}
    </button>
  )
}

export default Button