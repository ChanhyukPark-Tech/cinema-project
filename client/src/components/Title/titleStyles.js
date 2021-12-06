import styled from "styled-components";

export const TitleStyled = styled.div`
  margin: 10px;
  position: relative;

  background-color: transparent;

  h2 {
    text-align: center;
    width: 100%;
    color: #2c4b21;
    font-size: 4.1rem;
    font-weight: 800;
    position: relative;
    padding-bottom: 0.7rem;
    text-shadow: 5px 5px 3px #9ccc65;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
  }

  h3 {
    text-align: center;
    width: 100%;
    color: #2c4b21;
    font-size: 2.4rem;
    font-weight: 800;
    position: relative;
    padding-bottom: 0.7rem;
    text-shadow: 5px 5px 3px #9ccc65;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
  }
`;
