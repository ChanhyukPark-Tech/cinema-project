import React, {useState, useEffect} from 'react';
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Button, Table, Tag } from "antd";
import Title from "../../../components/Title/Title";
import axios from "axios";

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
                    <Link to={`/props`}>

                    </Link>
                )
            }
        }
    ]

    return (
        <div>시설관리</div>
    );
}

export default FacilityPage;