import styled from "styled-components";

export const TitleStyled = styled.div`
  margin: 50px 0;
  position: relative;
  height: 150px;
  background-color: transparent;

  h2 {
    text-align: center;
    width: 100%;
    color: #2c4b21;
    font-size: 4.1rem;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }

    span {
      font-weight: 900;
      color: rgba(109, 142, 101, .33);
      font-size: 5rem;
      position: absolute;
      left: 45%;
      top: 30%;
      z-index: -1;
      @media screen and (max-width: 620px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 496px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    }
  }
`;
