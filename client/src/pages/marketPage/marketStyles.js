import styled from "styled-components";

export const MarketContainer = styled.div`
  padding: 30px;
  height: 100%;
`

export const CoolBlueButton = styled.button`
  width: 100px;
  height: 100px;
`

export const MarketTitleContainer = styled.div`
  margin: 1px;
  position: relative;

  background-color: transparent;

  h2 {
    text-align: center;
    height: 0.3px;
    width: 100%;
    color: #2c4b21;
    font-size: 4.1rem;
    font-weight: 800;
    position: relative;
    text-shadow: 5px 5px 3px #9ccc65;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
  }
`;