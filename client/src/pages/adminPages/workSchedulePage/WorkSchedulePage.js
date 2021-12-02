import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import EventTitle from "../../eventPage/EventTitle";
import {Card, Select, Statistic, Table, Tag} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
import {WorkSchedulePageContainer} from "./workSchedulePageStyles";
import {dates, months} from "./DateTemplate";

function WorkSchedulePage() {
    const [posts, setPosts] = useState([]);
    const [totalWage, setTotalWage] = useState(0);
    const [curMonth, setCurMonth] = useState(12);
    const {Option} = Select;

    useEffect(() => {
        axios.get("/api/util/marketPosts").then((data) => {
            setPosts(data.data);
        });

        axios.post('/api/admin/getStaffWage', {
            place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length),
            month: curMonth

        }).then(res => {
            console.log(res.data)
            setTotalWage(res.data)
        })
    }, [curMonth])
    const columns = [

        {
            title: "근무자",
            dataIndex: "Nm",
            key: "Nm",
        },


        {
            title: "태그",
            key: "tag",
            dataIndex: "tag",
            render: (tag) => {
                let color = tag.length > 5 ? "geekblue" : "green";
                if (tag === "구매") {
                    color = "volcano";
                }
                if (tag === "판매완료") {
                    color = "darkgray";
                }
                return (
                    <>
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    </>
                );
            },
        },

        {
            title: "비고",
            dataIndex: "title",
            key: "title",
            render: (text, index) => {
                return (
                    <Link to={`/market/marketDetail/`}>{text}</Link>
                );
            },
        },
    ];

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

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
                <Select defaultValue="1일" style={{width: 120}} onChange={handleChange}>
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
                <Table columns={columns} dataSource={posts}/>
            </WorkSchedulePageContainer>
        </>
    );
}

export default WorkSchedulePage;