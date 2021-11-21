import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { timeTable } from "../../data/reservePageDummyData";
import { Button, Tooltip } from "antd";
import { TimeContentContainer } from "../../pages/reservePage/reservePageStyles";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function ReserveTimeList({
  history,
  localCode,
  branchCode,
  movieCode,
  setSelectedDate,
  times,
  getMovieTimesHandler,
}) {
  const [curHoverd, setCurHoverd] = useState(0);

  return (
    <div>
      <Calendar setSelectedDate={setSelectedDate} />
      <Button
        type="dashed"
        icon={<SearchOutlined />}
        size="large"
        onClick={() => {
          if (!localStorage.getItem("name")) alert("로그인하세용!");
          getMovieTimesHandler();
        }}
        style={{ float: "right" }}
      >
        영화 시간표 보기
      </Button>
      {times.map((time) => (
        <TimeContentContainer key={time.startDt}>
          <Button
            style={{ width: 200, alignItems: "center" }}
            disabled={!localStorage.getItem("name")}
            onMouseEnter={(e) => {
              e.preventDefault();
              setCurHoverd(time.schedule_id);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setCurHoverd(0);
            }}
          >
            <Link to={`/movie/reserve/seat/${time.schedule_id}`}>
              {time.schedule_id === curHoverd ? time.endDt : time.startDt}
            </Link>
          </Button>
          <div>{time.theaterNm}</div>
        </TimeContentContainer>
      ))}
    </div>
  );
}

export default ReserveTimeList;
