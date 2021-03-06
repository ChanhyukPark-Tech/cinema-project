import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import {Button} from "antd";
import {BorderLineContainer, TimeContentContainer} from "../../pages/reservePage/reservePageStyles";
import { Link } from "react-router-dom";

function ReserveTimeList({
  setSelectedDate,
  times,
}) {
  const [curHoverd, setCurHoverd] = useState(0);
  const current = new Date();
  return (
    <div>
      <Calendar  setSelectedDate={setSelectedDate} />
      {times.map((time) => (
        <TimeContentContainer key={time.startDt}>
          <span>{time.theaterNm}</span>

          <Button
            style={{ width: 200, alignItems: "center" }}
            disabled={!localStorage.getItem("name") || time?.startDt.substring(0,2) < current.getHours()}
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
          <BorderLineContainer/>

        </TimeContentContainer>
      ))}
    </div>
  );
}

export default ReserveTimeList;
