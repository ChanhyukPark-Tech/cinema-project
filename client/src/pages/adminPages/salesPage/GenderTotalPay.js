import React, {useEffect, useState} from 'react';
import axios from "axios";
import {myPlaceGenderTotalPay} from "../adminMainPage/chartConfig";
import {Bar} from "react-chartjs-2";

function GenderTotalPay(props) {

    const [genderTotal, setGenderTotal] = useState([])

    useEffect(() => {
        axios.post('/api/admin/getPlaceGenderPay', {place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)})
            .then(res => {
                setGenderTotal(res.data[0])
            })
    }, [])

    const result = myPlaceGenderTotalPay(["여성", "남성"], [genderTotal.woman, genderTotal.man])

    return (
        <div style={{width: '60%'}}>

            <Bar
                data={result}
            />

        </div>
    );
}

export default GenderTotalPay;