import styled, {css} from "styled-components";

export const ScreenBlock = styled.div`
  width: 1170px;
  height: 550px;
  margin: 0 auto;
  overflow: hidden;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 3px solid #e0e0e0;
    position: relative;
  }

  input[id="check1"]:checked + label::after {
    content: '✔';
    color: #97e683;
    font-size: 25px;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    left: 0;
    top: -15px;
  }
  span{
    margin-left: 10px;
    color: #6d8e65;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }

  .screen {
    background: #6e6e6e;
    font-size: 16px;
    font-family: "Roboto", "Noto Sans KR";
    font-weight: bold;
    letter-spacing: 15px;
    text-align: center;
    color: #fff;
    padding: 5px 0;
    margin-bottom: 30px;
  }
`;

export const SeatsBlock = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  ${({width}) => css`
    width: ${width}px;
  `}
`;

export const SeatRow = styled.div`
  font-family: "Roboto", "Noto Sans KR";
  font-size: 15px;
  color: #fff;
  ${({x, y}) => {
    if (x || y) {
      return css`
        position: absolute;
        left: ${x}px;
        top: ${y}px;
      `;
    }
  }}
`;

export const Seat = styled.div`
  width: 40px;
  height: 30px;
  font-size: 13px;
  background: #e8e8e8;
  border-radius: 7px 7px 0px 0px;
  font-family: "Roboto", "Noto Sans KR";
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all ease-in-out;
  ${({x, y}) => {
    if (x || y) {
      return css`
        position: absolute;
        left: ${x}px;
        top: ${y}px;
      `;
    }
  }}
  ${({size}) => {
    if (size === "small") {
      return css`
        width: 14px;
        height: 10px;
        border-radius: 4px 4px 0px 0px;
      `;
    }
  }}
  ${({status}) => {
    if (status === 0) {
      return css`
        background: #e8e8e8;
        cursor: pointer;
      `;
    } else if (status === 10) {
      return css`
        background: #9a818d;
      `;
    } else if (status === 30) {
      return css`
        background: hotpink;
      `;
    } else if (status === 40 || status === 23) {
      return css`
        background: dodgerblue;
      `;
    }
  }}
  ${({sweetSpot}) =>
          sweetSpot
                  ? css`
                    border: 1px solid #d41017;
                  `
                  : ""}
  ${({active}) =>
          active
                  ? css`
                    background: #ff243e;
                    color: #fff;
                  `
                  : ""}

  .arrow_box {
    z-index: 3;
    position: absolute;
    width: 100px;
    padding: 8px;
    left: -25px;
    bottom: -40px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background: #333;
    color: #fff;
    font-size: 14px;
  }

  //.arrow_box:after {
  //  position: absolute;
  //  bottom: 100%;
  //  left: 50%;
  //  width: 0;
  //  height: 0;
  //  margin-left: -10px;
  //  border: solid transparent;
  //  border-color: rgba(51, 51, 51, 0);
  //  border-bottom-color: #333;
  //  border-width: 10px;
  //  pointer-events: none;
  //  content: " ";
  //}

  div:hover + p.arrow_box {
    display: block;
  }
  
`;

export const StepBlock = styled.div`
  width: 100%;
  background: #000;

  .text-info {
    p {
      color: #fff;
      text-align: center;
      font-size: 11px;
      margin: 15px 0 25px 0;
    }
  }


  .create_product{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .upload{
    max-width: 150px;
    height: 150px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 15px;
    margin: 20px;
    position: absolute;
    top: 400px;
  }
  #file_up{
    position: relative;
    width: 100%;
    height: 100%;
    outline: none;
  }
  #file_up::before{
    content: "+";
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: white;
    color: rgb(250, 200, 107);
    font-size: 17rem;
    text-align: center;
    cursor: pointer;
    margin: auto;
  }
  #file_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: white;
  }
  #file_img img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  #file_img span{
    position: absolute;
    top: -13px;
    right: -13px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 6px 10px;
    cursor: pointer;
    font-weight: 900;
    color: crimson;
  }


  .other-people{
    background-color: black;
    border-radius: 10px;
    position: absolute;
    top: 120px;
    right:-200px;
    width: 250px;
    height: 250px;
    border: none;
    border:0px;
    img{

      
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  
  
`;


export const PersonSeatCount = styled.div`
  background: #fff;
  width: 100%;
  height: 117px;
  padding: 0 20px;
  display: flex;

  .movie-info {
    display: flex;
    align-items: center;

    img {
      display: block;
      width: 46px;
      border-radius: 4px;
    }

    .text-info {
      margin-left: 8px;
      width: 270px;

      .title {
        display: flex;
        align-items: center;

        & > span {
          font-size: 17px;
          font-weight: bold;
          margin-left: 4px;
        }
      }

      .detail-info {
        margin-top: 5px;
        font-size: 11px;
      }
    }
  }

  .person-count-list {
    width: 640px;
    display: flex;
    align-items: center;

    .person-count-item {
      display: flex;
      align-items: center;
      margin-left: 20px;

      & > span {
        white-space: nowrap;
        font-size: 13px;
        margin-right: 15px;
      }
    }
  }
`;

export const SeatsInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 41px;
  margin: 35px 0;
  padding-left: 40px;
  /* background: #333; */

  .seat-info-group {
    display: flex;

    .seat-info {
      display: flex;
      align-items: center;

      span {
        font-size: 12px;
        color: #fff;
        margin-left: 4px;
      }
    }

    .seat-info + .seat-info {
      margin-left: 8px;
    }
  }
`;
export const PersonSeatSummary = styled.div`
  display: flex;
  height: 60px;
  width: 100%;

  .seat-result {
    flex: 1;
    background: #888;
    font-size: 15px;
    color: #fff;
    padding-left: 30px;
    padding-top: 10px;
    display: flex;
    align-items: baseline;

    .result {
      font-family: 'Roboto';
      font-size: 25px;
      margin-left: 10px;
    }
  }

  .btn-pay {
    flex: 0 0 180px;
    background: #ff243e;
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
    font-size: 15px;
    color: #fff;
    cursor: pointer;
  }
`;
