import React from 'react';
import Calendar from "../Calendar/Calendar";
import {timeTable} from "../../data/reservePageDummyData";


function ReserveTimeList({localCode,branchCode,movieCode}) {

    const times = timeTable.filter(item => item.li === localCode && item.bi === branchCode && item.mi  === movieCode * 1)


    return (
        <div>
            <Calendar/>
            {times.map(time => (
                <div>
                    {time.time} 시간에 고르신영화가있네요
                    {time.roomNum} 로가세요
                </div>
            ))}
        </div>
    );
}

export default ReserveTimeList;