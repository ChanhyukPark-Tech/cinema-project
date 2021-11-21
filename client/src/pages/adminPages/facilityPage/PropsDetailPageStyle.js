import styled from "styled-components";

export const PropsDetailStyle = styled.div`
  margin: 100px;
  border: 3px soild red !important;
  z-index: 5;

  h2 {
    margin-right: 4rem;
    text-align: center;
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
  
  table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #444444;
    padding: 10px 5px;
    text-align: center;
  }
  th {
    background-color: #748D69; color: white;
  }
`;

export const OneContentContainer = styled.div`
  align-items: center;
  border: 1px solid #444444;
  p {
    text-align: center;
    //width: 100%;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
    position: relative;
    padding-top: 1.8rem;
    padding-bottom: 30rem;
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
    color: #748D69;
    font-size: 1.8rem;
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
