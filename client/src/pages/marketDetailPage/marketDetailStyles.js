import styled from "styled-components";

export const DetailInfoStyle = styled.div`
  margin: 100px;
  border: 3px soild red !important;
  z-index: 5;

  h2 {
    margin-right: 4rem;
    text-align: left;
    //width: 100%;
    color: #2c4b21;
    font-size: 2.1rem;
    font-weight: 800;
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
  }
`;

export const OneContentContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    text-align: center;
    //width: 100%;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
  }

  h3 {
    text-align: center;
    //width: 100%;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
  }
`;
