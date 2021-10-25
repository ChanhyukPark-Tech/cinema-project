import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'
import {TitleStyled} from "./titleStyles";

function Title({title,span}) {

    return (
        <TitleStyled>
            <h2 className="global-title">{title} <span>{span}</span></h2>
        </TitleStyled>
    );
}


export default Title;