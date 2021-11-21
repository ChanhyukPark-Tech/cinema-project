import React, {useState, useEffect} from 'react';
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Button, Table, Tag } from "antd";
import Title from "../../../components/Title/Title";
import axios from "axios";
import { FacilityContainer } from './FacilityPageStyles';

function FacilityPage(props) {
    const [posts, setPosts] = useState([]);
    const lists = [
        {
            title: "날짜",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "제목",
            dataIndex: "title",
            key: "title",
            render: (text, index) => {
                return (
                    <Link to={`/props/${index.props_id}`}>{text}</Link>
                );
            },
        },
        {
            title: "태그",
            key: "tag",
            dataIndex: "tag",
            render: (tag) => {
                let color = tag.length > 5 ? "geekblue" : "green";
                if (tag=="완료") {
                    color = "volcano";
                }
                if (tag=="처리중") {
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
    ];

    useEffect(() => {
        axios.get("/api/props").then((data) => {
            console.log(data.data);
            setPosts(data.data);
        });
    }, []);

    return (
        <>
        <Header/>
        <FacilityContainer>
            <Title title={"시설 관리"} />
            <Button style={{marginBottom:"10px", borderColor: "#2c4b21"}}>
                <Link to={"/props/addProp"}>파손 추가</Link>
            </Button>
            <Table lists={lists} dataSource={posts} />
        </FacilityContainer>
        </>
    );
}

export default FacilityPage;