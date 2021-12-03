import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import {Line, Bar} from 'react-chartjs-2'
import axios from "axios";
import {makeGenderData, makeTopSalesData, makeTotalSalesData} from "./chartConfig";
import {AdminMainPageContainer, ThreeChartContainer} from "./adminMainPageStyles";
import {Card, Col, Row, Statistic} from "antd";
import Footer from "../../../components/Footer/Footer";

function AdminMainPage({history}) {
    const [topSalesTotal, setTopSalesTotal] = useState([])
    const [salesTotal, setSalesTotal] = useState([])
    const [genderTotal, setGenderTotal] = useState([])
    const [labels, setLabels] = useState([])
    const [datas, setDatas] = useState([]);
    const [genderLabels, setGenderLabels] = useState([])
    const [genderDatas, setGenderDatas] = useState([]);
    const [topSalesLabels, setTopSalesLabels] = useState([])
    const [topSalesDatas, setTopSalesDatas] = useState([]);
    const [totalMember, setTotalMember] = useState(0);
    const [ourPlaceTotalStaff, setOurPlaceTotalStaff] = useState(0);
    // const [myMember,setMyMember]= useState(0);
    // const [recentFive,setRecentFive] = useState([]);


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
            setTotalMember(data.data[0].memberNumber)
        })

        axios.get('/api/admin/getRecentTicketTop5').then(data => {
        })

        axios.post('/api/admin/countStaff', {place_place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)})
            .then(res => {
                setOurPlaceTotalStaff(res.data[0].staffNumber)
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
            <div className={"topTen"}>
                <Bar
                    data={topSalesData}
                />
            </div>

            <div className={"statistics"}>


                <Row gutter={16}>
                    <Col span={12}>
                        <Card>

                            <Statistic title="전체 고객수" value={totalMember}/>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic title="우리지점 직원수" value={ourPlaceTotalStaff}/>
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


            </ThreeChartContainer>
            <Footer/>
        </AdminMainPageContainer>
    );
}

export default AdminMainPage;