import React, {useState} from 'react';
import Calendar from "../Calendar/Calendar";
import {timeTable} from "../../data/reservePageDummyData";
import {Button} from "antd";
import {TimeContentContainer} from "../../pages/reservePage/reservePageStyles";
import {Link} from "react-router-dom";


function ReserveTimeList({history,localCode, branchCode, movieCode, setSelectedDate, times, getMovieTimesHandler}) {

    const [curHoverd, setCurHoverd] = useState(0)

    return (
        <div>
            <Calendar setSelectedDate={setSelectedDate}/>
            <Button onClick={() => {
                if(!localStorage.getItem("name"))
                    alert("로그인하세용!")
                getMovieTimesHandler();
            }} style={{float: "right"}}>검색하기</Button>
            {times.map(time => (
                <TimeContentContainer key={time.startDt}
                >
                    <Button
                        disabled={!localStorage.getItem("name")}
                        onMouseEnter={(e) => {
                            e.preventDefault();
                            setCurHoverd(time.schedule_id);
                        }}
                        onMouseLeave={e => {
                            e.preventDefault();
                            setCurHoverd(0);
                        }}>
                        <Link to={`/movie/reserve/seat/${time.schedule_id}`} >
                            {time.schedule_id === curHoverd ? time.endDt : time.startDt}
                        </Link>
                    </Button>
                    <div>
                        {time.theaterNm}
                    </div>
                </TimeContentContainer>
            ))}
        </div>
    );
}


export default ReserveTimeList;