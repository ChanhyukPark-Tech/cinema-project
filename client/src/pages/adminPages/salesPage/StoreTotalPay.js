import React, {useEffect, useState} from 'react';
import axios from "axios";
import {myPlaceGenderTotalPay, myPlaceStoreTotalPay} from "../adminMainPage/chartConfig";
import {Bar} from "react-chartjs-2";

function StoreTotalPay(props) {
    const [storeItems, setStoreItems] = useState([]);
    const [storeItemsLabels, setStoreItemsLabels] = useState([]);
    const [storeItemsDatas, setStoreItemsDatas] = useState([]);

    useEffect(() => {
        axios.post('/api/store/getStoreitemMonthSale', {place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)})
            .then(res => {
                console.log(res.data)
                setStoreItems(res.data)
            })
    }, [])
    const labels = [];
    const datas = [];
    useEffect(()=>{

        storeItems.forEach(oneItem => {
            labels.push(oneItem.itemNm)
            datas.push(oneItem.sale)
        })

        setStoreItemsLabels(labels)
        setStoreItemsDatas(datas)
    },[storeItems])

    const result = myPlaceStoreTotalPay(storeItemsLabels, storeItemsDatas)

    return (
        <div style={{width: '80%', position: 'relative' ,margin:'0 auto'}}>
            <Bar
                data={result}
            />

        </div>
    );
}

export default StoreTotalPay;
