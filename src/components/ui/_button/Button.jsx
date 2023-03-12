import React from 'react';
import './button.style.scss';
import styled from "styled-components";

function Button(props) {

  const StyledButton = styled.button

    `
    background: ${props.background};
    color:${props.color};
    font-weight: ${props.fontWeight}; 
    padding:${props.padding};

      &:hover {
        background-color: ${props.color};
        color:${props.background};}
    `

  return (
    <StyledButton type='submit' className={props.className}>
      {props.text}
    </StyledButton>
  )
}

export default Button