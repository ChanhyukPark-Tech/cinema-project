import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import EventTitle from "../../eventPage/EventTitle";
import {Select, Table, Tag} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
import {WorkSchedulePageContainer} from "./workSchedulePageStyles";
import {dates, months} from "./DateTemplate";

function WorkSchedulePage() {
    const [posts, setPosts] = useState([]);
    const {Option} = Select;

    useEffect(() => {
        axios.get("/api/util/marketPosts").then((data) => {
            setPosts(data.data);
        });
    }, [])
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
                <Select defaultValue="1월" style={{width: 120}} onChange={handleChange}>
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
                <Table columns={columns} dataSource={posts}/>
            </WorkSchedulePageContainer>
        </>
    );
}

export default WorkSchedulePage;