import React, { useState } from "react";
import Header from "../../components/header/Header";
import { useParams, useRouteMatch } from "react-router-dom";
import styled, { css } from "styled-components";
import startInsert from "./makeSeatTemplate";

const ScreenBlock = styled.div`
  width: 1170px;
  height: 470px;
  margin: 0 auto;
  overflow: scroll;
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
  }
`;

const SeatsBlock = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  ${({ width }) => css`
    width: ${width}px;
  `}
`;

const SeatRow = styled.div`
  font-family: "Roboto", "Noto Sans KR";
  font-size: 15px;
  color: #fff;
  ${({ x, y }) => {
    if (x || y) {
      return css`
        position: absolute;
        left: ${x}px;
        top: ${y}px;
      `;
    }
  }}
`;

const Seat = styled.div`
  width: 30px;
  height: 20px;
  font-size: 13px;
  background: #e8e8e8;
  border-radius: 7px 7px 0px 0px;
  font-family: "Roboto", "Noto Sans KR";
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ x, y }) => {
    if (x || y) {
      return css`
        position: absolute;
        left: ${x}px;
        top: ${y}px;
      `;
    }
  }}
  ${({ size }) => {
    if (size === "small") {
      return css`
        width: 14px;
        height: 10px;
        border-radius: 4px 4px 0px 0px;
      `;
    }
  }}
  ${({ status }) => {
    if (status === 0) {
      return css`
        background: #e8e8e8;
        cursor: pointer;
      `;
    } else if (status === 30) {
      return css`
        background: hotpink;
      `;
    } else if (status === 50 || status === 23) {
      return css`
        background: dodgerblue;
      `;
    }
  }}
  ${({ sweetSpot }) =>
    sweetSpot
      ? css`
          border: 1px solid #d41017;
        `
      : ""}
  ${({ active }) =>
    active
      ? css`
          background: #ff243e;
          color: #fff;
        `
      : ""}
`;

function SeatSelectPage() {
  const params = useParams();
  const [seats, setSeats] = useState([]);
  setSeats(startInsert);

  const StepBlock = styled.div`
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
  `;

  const xScaleRatio = 18;
  const yScaleRatio = 22;
  const seatsBlockWidth = 620;

  return (
    <div>
      <Header />
      <StepBlock>
        <ScreenBlock>
          <div className="screen">SCREEN</div>
          <SeatsBlock width={seatsBlockWidth}>
            {seats.map((seat) => (
              <React.Fragment key={seat.SeatNo}>
                <SeatRow x={0} y={seat.SeatYCoordinate / yScaleRatio - 60}>
                  {seat.SeatRow}
                </SeatRow>
                <Seat
                  x={seat.SeatXCoordinate / xScaleRatio}
                  y={seat.SeatYCoordinate / yScaleRatio - 60}
                  status={seat.SeatStatusCode}
                  sweetSpot={seat.SweetSpotYN === "Y" ? true : false}
                  //active={activeSeats.includes(seat.SeatNo)}
                  // onClick={() =>
                  //   handleSeatClick(seat.SeatNo, seat.SeatStatusCode)
                  // }
                >
                  {seat.SeatColumn}
                </Seat>
              </React.Fragment>
            ))}
          </SeatsBlock>
        </ScreenBlock>
      </StepBlock>
    </div>
  );
}

export default SeatSelectPage;
