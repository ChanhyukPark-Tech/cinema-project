import React, {useEffect} from 'react';
import Header from "../../../components/header/Header";
import {Badge, Calendar} from "antd";
import {CalenderContainer} from "./salesPageStyles";
import axios from "axios";


function getListData(value) {

    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {type: 'warning', content: '💰 3213131313'},
                {type: 'success', content: 'This is usual event.'},
            ];
            break;
        case 10:
            listData = [
                {type: 'warning', content: 'This is warning event.'},
                {type: 'success', content: 'This is usual event.'},
                {type: 'error', content: 'This is error event.'},
            ];
            break;
        case 15:
            listData = [
                {type: 'warning', content: 'This is warning event'},
                {type: 'success', content: 'This is very long usual event。。....'},
                {type: 'error', content: 'This is error event 1.'},
                {type: 'error', content: 'This is error event 2.'},
                {type: 'error', content: 'This is error event 3.'},
                {type: 'error', content: 'This is error event 4.'},
            ];
            break;
        default:
    }
    return listData || [];
}

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


function SalesPage(props) {

    useEffect(() => {
        axios.post('/api/admin/getPlaceDayPay',{place_id:1*localStorage.getItem("name").substring(3,localStorage.getItem("name").length ),
            month:7
        }).then(res => {
            console.log(res.data)
        })
    }, [])

    return (
        <>
            <Header/>
            <CalenderContainer>
                <Calendar fullscreen={false} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
            </CalenderContainer>

        </>
    );
}

export default SalesPage;