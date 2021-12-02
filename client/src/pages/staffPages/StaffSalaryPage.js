import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/header/Header";
import {months} from "../adminPages/workSchedulePage/DateTemplate";
import {Card, Col, Row, Select, Statistic} from "antd";
import Footer from "../../components/Footer/Footer";

function StaffSalaryPage(props) {

    const [curMonth, setCurMonth] = useState(12);
    const {Option} = Select;
    const [myPay, setMyPay] = useState([])

    useEffect(() => {
        axios.post('/api/staff/getWage', {staff_id: localStorage.getItem("name").substring(5, 7) * 1, month: curMonth})
            .then(res => {
                setMyPay(res.data[0])
            })
    }, [curMonth])

    return (
        <>
            <Header/>
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
            <div className={"statistics"} style={{marginBottom:'50px'}}>


                <Row gutter={16}>
                    <Col span={8}>
                        <Card>

                            <Statistic title="정규시간 급여" value={myPay?.normalWage}/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic title="추가수당 급여" value={myPay?.overWage}/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic title="급여 총합" value={myPay?.totalWage}/>
                        </Card>
                    </Col>
                </Row>

            </div>
            <Footer/>
        </>
    );
}

export default StaffSalaryPage;