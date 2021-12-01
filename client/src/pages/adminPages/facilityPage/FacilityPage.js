import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import EventTitle from "../../eventPage/EventTitle";
import {months} from "../workSchedulePage/DateTemplate";
import {Select, Table, Tag} from "antd";
import axios from "axios";
import {Link} from "react-router-dom";
import { numberWithCommas } from "../../../util"

const { Option } = Select;

function FacilityPage(props) {

    const [selected, setSelected] = useState(0);
    const [store, setStore] = useState([]);

    useEffect(() => {
        axios.post('/api/store/outstore', {
            place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length),
            quarter: selected
        }).then(res => {
            console.log(res.data)
            setStore(res.data)
        })
    }, [selected])

    const columns = [

        {
            title: "입점시설",
            dataIndex: "outstoreNm",
            key: "outstoreNm",
        },


        {
            title: "임대료",
            key: "rent",
            dataIndex: "rent",
            render: (rent) => {
                return (
                    <p>💰{numberWithCommas(rent)}</p>
                )
            }
        },

        {
            title: "매출",
            dataIndex: "sales",
            key: "sales",
            render: (sales) => {
                return (
                    <p>💰{numberWithCommas(sales)}</p>
                )
            }
        },
    ];


    function handleChange(value) {
        setSelected(value*1);
        console.log(selected);

    }

    return (
        <>
            <Header/>
            <EventTitle title={"입점시설관리"}/>
            <Select defaultValue="1분기" style={{width: 120, marginLeft:50}} onChange={handleChange}>

                <Option value="1">1분기</Option>
                <Option value="2">2분기</Option>
                <Option value="3">3분기</Option>
                <Option value="4">4분기</Option>

            </Select>
            <Table columns={columns} dataSource={store}/>
            <Footer/>
        </>
    );
}

export default FacilityPage;