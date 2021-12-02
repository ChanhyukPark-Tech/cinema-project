import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/header/Header";
import {Table, Tag} from "antd";
import Footer from "../../components/Footer/Footer";

function StaffContact(props) {
    const [contacts,setContacts] = useState([])


    useEffect(()=>{
        axios.post('/api/admin/getstaffEmergency',{place_id:localStorage.getItem("name")[3]})
            .then(res => {
                setContacts(res.data)
            })
    },[])


    const columns = [

        {
            title: "직원명",
            dataIndex: "Nm",
            key: "Nm",
        },


        {
            title: "핸드폰 번호",
            key: "phoneNb",
            dataIndex: "phoneNb"
        },
        {
            title: "직급",
            key: "classNm",
            dataIndex: "classNm",
            render: (classNm) => {
                let color = classNm.length > 3 ? "geekblue" : "green";

                return (
                    <>
                        <Tag color={color} key={classNm}>
                            {classNm}
                        </Tag>
                    </>
                );
            },
        },


    ]



    return (
        <>
            <Header/>
            <div style={{padding:'30px'}}>
                <Table columns={columns} dataSource={contacts}/>

            </div>

            <Footer/>
        </>
    );
}

export default StaffContact;