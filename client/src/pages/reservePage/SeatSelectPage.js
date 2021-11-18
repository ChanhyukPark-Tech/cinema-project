import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useParams, useRouteMatch } from "react-router-dom";
import { startInsert } from "./makeSeatTemplate";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  ScreenBlock,
  SeatsBlock,
  SeatRow,
  Seat,
  StepBlock,
  PersonSeatCount
} from "./makeSeatStyle";
import axios from "axios";
import {getViewGradeIconOptions} from "../../util";
import ViewGradeIcon from "../../components/ViewGradeIcon/ViewGradeIcon";

function SeatSelectPage() {
  const params = useParams();
  const [seats, setSeats] = useState([]);
  const [curMovie, setCurMovie] = useState([]);



  useEffect(() => {
    startInsert(setSeats);
    axios.post('/api/reserve/getCurMovie',{schedule_id:params.id})
        .then(data => {
          setCurMovie(data.data[0])
        })
  }, []);

  const xScaleRatio = 18;
  const yScaleRatio = 22;
  const seatsBlockWidth = 620;
  const viewGradeIconOptions = getViewGradeIconOptions(
      curMovie.watchGradeName
  );
  console.log(viewGradeIconOptions)
  return (
    <div>
      <Header />
      <StepBlock>
        <SectionTitle title={"인원/좌석 선택"} />
        <PersonSeatCount>
          <div className="movie-info">
            <img src={curMovie.PosterURL} alt="poster" />
            <div className="text-info">
              <div className="title">
                <ViewGradeIcon
                  size={22}
                  color={viewGradeIconOptions.color}
                  text={viewGradeIconOptions.text}
                />
                <span>{curMovie.movieNm}</span>
              </div>
              <div className="detail-info">
                <div className="time">
                  {`${curMovie.ymd} | ${curMovie.startDt}~${curMovie.endDt}`}
                </div>
                <div className="screen">{`${curMovie.CinemaNameKR} | ${curMovie.theaterNm} `}</div>
              </div>
            </div>
          </div>
          {/*<div className="person-count-list">*/}
          {/*  {customerDivision.map((division) => (*/}
          {/*    <div*/}
          {/*      key={division.CustomerDivisionCode}*/}
          {/*      className="person-count-item"*/}
          {/*    >*/}
          {/*      <span>{division.CustomerDivisionNameKR}</span>*/}
          {/*      <CountUpDown*/}
          {/*        count={*/}
          {/*          customerCount[division.CustomerDivisionNameUS.toLowerCase()]*/}
          {/*        }*/}
          {/*        onUpClick={() =>*/}
          {/*          handleCustomerCountUpClick(*/}
          {/*            division.CustomerDivisionNameUS.toLowerCase()*/}
          {/*          )*/}
          {/*        }*/}
          {/*        onDownClick={() =>*/}
          {/*          handleCustomerCountDownClick(*/}
          {/*            division.CustomerDivisionNameUS.toLowerCase()*/}
          {/*          )*/}
          {/*        }*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </PersonSeatCount>
        <ScreenBlock>
          <div className="screen">SCREEN</div>
          <SeatsBlock width={seatsBlockWidth}>
            {seats.length > 0 &&
              seats.map((seat) => (
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
