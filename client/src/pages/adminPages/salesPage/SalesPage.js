import Header from "../../../components/header/Header";
import React, {useEffect, useState} from 'react';
import {Line, Bar} from 'react-chartjs-2'
import axios from "axios";
import {makeGenderData, makeTopSalesData, makeTotalSalesData} from "../adminMainPage/chartConfig";
import {AdminMainPageContainer, ThreeChartContainer} from "../adminMainPage/adminMainPageStyles";
import {Card, Col, Row, Statistic} from "antd";

function SalesPage({history}) {
    const [topSalesTotal, setTopSalesTotal] = useState([])
    const [salesTotal, setSalesTotal] = useState([])
    const [genderTotal, setGenderTotal] = useState([])
    const [labels, setLabels] = useState([])
    const [datas, setDatas] = useState([]);
    const [genderLabels, setGenderLabels] = useState([])
    const [genderDatas, setGenderDatas] = useState([]);
    const [topSalesLabels, setTopSalesLabels] = useState([])
    const [topSalesDatas, setTopSalesDatas] = useState([]);
    const [totalUser, setTotalUser] = useState(0);

    useEffect(() => {
        axios.get('/api/admin/salesTotal').then(data => {
            setSalesTotal(data.data.sort((a, b) => {
                return a.month - b.month
            }));
        })
        axios.get('/api/admin/genderBothTotal').then(data => {
            setGenderTotal(data.data)
        })
        axios.get('/api/admin/getPlacePayTop10')
            .then(data => {
                setTopSalesTotal(data.data)
            })
        axios.get('/api/admin/countMember').then(data => {
            setTotalUser(data.data[0].memberNumber)
        })

        axios.get('/api/admin/getRecentTicketTop5').then(data => {
        })

    }, [])

    useEffect(() => {
        let tempLabels = [];
        let tempDatas = [];
        let genderTempLabels = [];
        let genderTempDatas = [];
        let topSalesTempLabels = [];
        let topSalesTempDatas = [];

        topSalesTotal.forEach(data => {
            topSalesTempLabels.push(data.CinemaNameKR)
            topSalesTempDatas.push(data.total);
        })

        setTopSalesLabels(topSalesTempLabels)
        setTopSalesDatas(topSalesTempDatas)


        salesTotal.forEach(oneMonth => {
            tempLabels.push(oneMonth.month + "월")
            tempDatas.push(oneMonth.totalPrice)
        })

        setLabels(tempLabels)
        setDatas(tempDatas)

        genderTotal.forEach(oneContent => {
            genderTempLabels.push(oneContent.gender)
            genderTempDatas.push(oneContent.totalPrice)
        })

        setGenderLabels(genderTempLabels)
        setGenderDatas(genderTempDatas)

    }, [salesTotal, genderTotal, topSalesTotal])


    const salesData = makeTotalSalesData(labels, datas)
    const salesDataGender = makeGenderData(genderLabels, genderDatas);
    const topSalesData = makeTopSalesData(topSalesLabels, topSalesDatas);

    return (
        <AdminMainPageContainer>
            <Header/>
            <div className={"statistics"}>


                <Row gutter={16}>
                    <Col span={12}>
                        <Card>

                            <Statistic title="Active Users" value={totalUser}/>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic title="우리지점 직원수" value={112893} precision={2}/>
                        </Card>
                    </Col>
                </Row>
            </div>

            <ThreeChartContainer>
                <div style={{width: '30%'}}>
                    <Line
                        data={salesData}
                        width={1}
                        height={1}
                    />
                </div>


                <div style={{width: '30%'}}>
                    <Bar
                        data={salesDataGender}
                        height={300}
                    />
                </div>

                <div style={{width: '30%'}}>
                    <Bar
                        data={salesDataGender}
                        height={300}
                    />
                </div>
            </ThreeChartContainer>

        </AdminMainPageContainer>
    );
}

export default SalesPage;