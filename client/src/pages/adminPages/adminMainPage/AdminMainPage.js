import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import {Line} from 'react-chartjs-2'
import axios from "axios";

function AdminMainPage({history}) {
    const [salesTotal, setSalesTotal] = useState([])
    const [genderTotal, setGenderTotal] = useState([])
    const [labels,setLabels] = useState([])
    const [datas,setDatas] = useState([]);
    const [genderLabels,setGenderLabels] = useState([])
    const [genderDatas,setGenderDatas] = useState([]);
    useEffect(()=>{
        axios.get('/api/admin/salesTotal').then(data => {
            setSalesTotal(data.data.sort((a,b)=> {return a.month - b.month}));
        })
        axios.get('/api/admin/genderBothTotal').then(data =>{
            setGenderTotal(data.data)
        })
    },[])

    useEffect(()=>{
        let tempLabels = [];
        let tempDatas = [];
        let genderTempLabels = [];
        let genderTempDatas = [];

        salesTotal.map(oneMonth => {
            tempLabels.push(oneMonth.month + "월")
            tempDatas.push(oneMonth.totalPrice)
        })

        setLabels(tempLabels)
        setDatas(tempDatas)

        genderTotal.map(oneContent => {
            genderTempLabels.push(oneContent.gender)
            genderTempDatas.push(oneContent.totalPrice)
        })

        setGenderLabels(genderTempLabels)
        setGenderDatas(genderTempDatas)

    },[salesTotal,genderTotal])


    const salesData = {
        labels: labels,
        datasets: [
            {
                label: '월별매출현황',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data:datas
            }
        ]
    };




    const salesDataGender = {
        labels: genderLabels,
        datasets: [
            {
                label: '성별별매출현황',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data:genderDatas
            }
        ]
    };
    return (
        <>
            <Header/>
            <div style={{width:'30%'}}>
                <Line
                    data={salesData}
                    width={1}
                    height={1}
                />
            </div>

            <div style={{width:'30%'}}>
                <Line
                    data={salesDataGender}
                    width={1}
                    height={1}
                />
            </div>

        </>
    );
}

export default AdminMainPage;