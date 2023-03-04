import React from 'react';
import './button.style.scss';
import styled from "styled-components";

function Button(props) {

  const StyledButton = styled.button`

    background: ${props.background};
    color:${props.color};
    font-size:${props.fontSize};
    font-weight: ${props.fontWeight};
    padding: ${props.padding};  

      &:hover {
        background-color: ${props.color};
        color:${props.background};}

      &:active {
      }
   `


  return (
    <StyledButton className='button'>
      {props.text}
    </StyledButton>
  )
}

export default Button