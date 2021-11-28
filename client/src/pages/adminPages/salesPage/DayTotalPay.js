import React, {useEffect, useState} from 'react';
import {Badge, Calendar} from "antd";
import axios from "axios";
import {CalenderContainer} from "./salesPageStyles";

function DayTotalPay(props) {
    const current = new Date();
    const [dayTotalPrice,setDayTotalPrice] = useState([])
    const [curMonth, setCurMonth] = useState(current.getMonth() + 1)

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content}/>
                    </li>
                ))}
            </ul>
        );
    }

    function getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    function getListData(value) {
        let listData;


        for(let i = 0 ; i < 34 ; i++){
            for(let j = 0 ; j < dayTotalPrice.length; j++){
                if(value.date() === dayTotalPrice[j].day){
                    if(i < 31){

                        listData = [
                            {type: 'warning', content: dayTotalPrice[j].totalPrice},
                        ];
                    }
                    break;
                }
            }
        }
        return listData || [];
    }


    useEffect(() => {
        axios.post('/api/admin/getPlaceDayPay',{place_id:localStorage.getItem("name").substring(3,localStorage.getItem("name").length ),
            month:curMonth
        }).then(res => {
            setDayTotalPrice(res.data);
        })
    }, [curMonth])



    return (
        <CalenderContainer>
            <Calendar fullscreen={false} dateCellRender={dateCellRender} monthCellRender={monthCellRender} onChange={date => {
                setCurMonth(date.format().substring(5,7))
            }} />
        </CalenderContainer>
    );
}

export default DayTotalPay;