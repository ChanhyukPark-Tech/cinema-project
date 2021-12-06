import React from 'react';
import {TitleStyled} from "./titleStyles";

function Title({title, span, small}) {

    return (
        <TitleStyled>
            {
                small ?
                    <h3 className="global-title-small">{title} <span>{span}</span></h3>
                    : <h2 className="global-title">{title} <span>{span}</span></h2>
            }
        </TitleStyled>
    );
}


export default Title;