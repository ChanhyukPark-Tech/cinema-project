import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import EventTitle from "../../eventPage/EventTitle";
import {Select, Table} from "antd";
import axios from "axios";
import {numberWithCommas} from "../../../util"

const {Option} = Select;

function FacilityPage(props) {

    const [selected, setSelected] = useState(1);
    const [store, setStore] = useState([]);

    useEffect(() => {
        axios.post('/api/store/outstore', {
            place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length),
            quarter: selected
        }).then(res => {
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
        setSelected(value * 1);
        console.log(selected);

    }

    return (
        <>
            <div style={{margin: '30px'}}>
                <Header/>
                <EventTitle title={"입점시설관리"}/>
                <Select defaultValue="1분기" style={{width: 120}} onChange={handleChange}>

                    <Option value="1">1분기</Option>
                    <Option value="2">2분기</Option>
                    <Option value="3">3분기</Option>
                    <Option value="4">4분기</Option>

                </Select>
                <Table columns={columns} dataSource={store}/>
            </div>
            <Footer/>
        </>
    );
}

export default FacilityPage;