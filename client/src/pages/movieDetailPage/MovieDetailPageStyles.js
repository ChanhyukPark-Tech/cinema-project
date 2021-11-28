import styled from "styled-components";

export const BackColor = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6efd7;
  //.setlabelwidth {
  //  th {
  //    width: 30%;
  //  }
  //}
  //.ant-descriptions-row{
  //  margin: 50px 0;
  //}
  
`;

export const MovieDetailInfoStyle = styled.div`
  margin: 10px;
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
    padding-bottom: 0.1rem;
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
`

export const GridCardStyle = styled.div`
  margin: 0 50px;
`;

export const MovieDetailTitleStyle = styled.div`
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
`;
