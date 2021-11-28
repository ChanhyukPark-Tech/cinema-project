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
    // 시설 관리: 모델명, 유형, 위치 지점, 단가, 재고 표시!
    const propsLists = [
        {
            title: "모델명",
            dataIndex: "modelNm",
            key: "modelNm",
            render: (text, index) => {
                return (
                    <Link to={`/props/${index.props_id}`}>{text}</Link>
                );
            },
        },
        {
            title: "시설 유형",
            dataIndex: "propsType_propsType_id",
            key: "propsType_propsType_id",
        },
        {
            title: "단가",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "재고",
            dataIndex: "amount",
            key: "amount",
        },
    
    ];

    // 파손 시설 목록: 모델명, 파손 사항 텍스트, 처리중/처리완료 태그 표시
    const damagePropsLists = [
        {
            title: "파손시설 모델명",
            dataIndex: "modelNm",
            key: "modelNm",
        },
        {
            title: "등록 일자",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "파손사항",
            dataIndex: "damage",
            key: "damage",
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
                if (tag==="완료") {
                    color = "volcano";
                }
                if (tag==="처리중") {
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
            <Table propsLists={propsLists} dataSource={posts} />
            <Title title={"파손 시설 목록"} />
            <Button style={{marginBottom:"10px", borderColor: "#2c4b21"}}>
                <Link to={"prosp/addProp"}>파손 추가</Link>
            </Button>
            <Table damagePropsLists={damagePropsLists} dataSource={posts} />
        </FacilityContainer>
        <Footer/>
        </>
    );
}

export default FacilityPage;