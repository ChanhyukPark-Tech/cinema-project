import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import axios from "axios";
import {numberWithCommas} from "../../util";
import {Table} from "antd";
import Footer from "../../components/Footer/Footer";

function StaffNoticePage(props) {

    const [notices,setNotices] = useState([])

    useEffect(()=>{
        axios.post('/api/admin/getNotice',{place_id:localStorage.getItem("name")[3]}).then(res => {
            setNotices(res.data);
        })
    },[])

    const columns = [

        {
            title: "작성자",
            dataIndex: "authorNm",
            key: "authorNm",
        },


        {
            title: "제목",
            key: "title",
            dataIndex: "title"
        },
        {
            title: "내용",
            dataIndex: "content",
            key: "content",
        },


        ]



    return (
        <>
            <Header/>
            <div style={{padding:'30px'}}>
            <Table columns={columns} dataSource={notices}/>

            </div>

            <Footer/>
        </>
    );
}

export default StaffNoticePage;