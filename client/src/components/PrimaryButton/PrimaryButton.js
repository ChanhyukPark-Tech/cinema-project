import React from 'react';
import styled from 'styled-components'

function PrimaryButton({title}) {

    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>


    );
}


const PrimaryButtonStyled = styled.div`
  z-index: 500;
  background-color: #6d8e65;
  padding: 0.8rem 2.5rem;
  color: black;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  border-radius: 4px;
  &::after{
    content:"";
    position: absolute;
    width: 0;
    height: .2rem;
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);

  }
`
export default PrimaryButton;
