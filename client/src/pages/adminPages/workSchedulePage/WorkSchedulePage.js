import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import EventTitle from "../../eventPage/EventTitle";
import {Card, Select, Statistic, Table, Tag} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
import {WorkSchedulePageContainer} from "./workSchedulePageStyles";
import {dates, months} from "./DateTemplate";

function WorkSchedulePage() {
    const current = new Date()
    const [totalWage, setTotalWage] = useState(0);
    const [curMonth, setCurMonth] = useState(12);
    const [curDay, setCurDay] = useState(current.getDate());
    const [workSchedule, setWorkSchedule] = useState([]);
    const {Option} = Select;

    useEffect(() => {


        axios.post('/api/admin/getRoster', {
            place_place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length),
            month: curMonth,
            day: curDay
        }).then(res => {
            setWorkSchedule(res.data)
        })


        axios.post('/api/admin/getStaffWage', {
            place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length),
            month: curMonth

        }).then(res => {
            setTotalWage(res.data)
        })
    }, [curMonth,curDay])
    const columns = [

        {
            title: "사원번호",
            dataIndex: "accountNb",
            key: "accountNb",
        },
        {
            title: "이름",
            dataIndex: "Nm",
            key: "Nm",
        },

        {
            title: "출근",
            dataIndex: "attend",
            key: "attend",
        },
        {
            title: "퇴근",
            dataIndex: "end",
            key: "end",
        },

        {
            title: "배정근무명",
            key: "workContent",
            dataIndex: "workContent",
            render: (workContent,index) => {
                let color = workContent?.length > 5 ? "geekblue" : "green";
                if (workContent === "티켓관리") {
                    color = "volcano";
                }
                if (workContent === "매점관리") {
                    color = "geekblue";
                }
                return (
                    <>
                        <Tag color={color} key={index}>
                            {workContent}
                        </Tag>
                    </>
                );
            },
        },


    ];

    return (
        <>
            <Header/>
            <WorkSchedulePageContainer>
                <EventTitle title={"근무표"}/>

                <Select defaultValue="12월" style={{width: 120}} onChange={(value) => {
                    const onlyNumber = value.replace(/월/g, "")
                    setCurMonth(onlyNumber)
                }}>
                    {
                        months.map(month => (
                            <Option value={month}>{month}</Option>
                        ))
                    }
                </Select>
                <Select defaultValue={current.getDate() + "일"} style={{width: 120}} onChange={(value) => {
                    const onlyNumber = value.replace(/일/g, "")
                    setCurDay(onlyNumber)
                }}>
                    {
                        dates.map(date => (
                            <Option value={date}>{date}</Option>
                        ))
                    }
                </Select>
                <div className={'card-container'}>
                    <Card size={"small"}>
                        <Statistic title="금월 매니저 총임금" value={totalWage[1]?.Wage}/>
                    </Card>
                    <Card size={"small"}>

                        <Statistic title="금월 아르바이트 총임금" value={totalWage[0]?.Wage}/>
                    </Card>
                </div>
                <Table columns={columns} dataSource={workSchedule}/>
            </WorkSchedulePageContainer>
        </>
    );
}

export default WorkSchedulePage;