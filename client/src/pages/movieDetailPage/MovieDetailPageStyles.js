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

  .ant-rate {
    display: flex;
    justify-content: space-evenly;
    width: 12%;
    border-radius: 8px;
    margin-left: 42px;

    .ant-rate-star-full {
      svg {

        color: #2c4b21;
      }

    }

    .ant-rate-star-half {
        color: #2c4b21;

    }

    .ant-rate-star-zero {
      svg {
        color: #97e683;

      }

    }

    //svg{
    //  color:green;
    //}
  }


  .comment-list {
    margin: 0 10vw;

    img {
      width: 50px;
      height: 50px;

    }

    span {
      font-size: 27px;
    }

    div {
      font-size: 23px;


    }
  }
`;

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


