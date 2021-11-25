import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { timeTable } from "../../data/reservePageDummyData";
import {Avatar, Badge, Button, Tooltip} from "antd";
import {BorderLineContainer, TimeContentContainer} from "../../pages/reservePage/reservePageStyles";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function ReserveTimeList({
  setSelectedDate,
  times,
}) {
  const [curHoverd, setCurHoverd] = useState(0);

  return (
    <div>
      <Calendar  setSelectedDate={setSelectedDate} />
      {times.map((time) => (
        <TimeContentContainer key={time.startDt}>
          <span>{time.theaterNm}</span>

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
          <BorderLineContainer/>

        </TimeContentContainer>
      ))}
    </div>
  );
}

export default ReserveTimeList;
