import React, {useEffect, useState} from 'react';
import axios from "axios";
import {myPlaceAgeTotalPay} from "../adminMainPage/chartConfig";
import {Bar} from "react-chartjs-2";
import sessack from "../../marketPage/sproutChar.gif";
import sessackPink from "../../marketPage/sproutCharPink.gif";

function AgeDivisionPay(props) {
    const [agePay,setAgePay] = useState([])
    useEffect(() => {
        axios.post('/api/admin/getAgePay', {
            place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)
        }).then(res => {
            setAgePay(res.data[0])
            console.log(res.data[0])
        })
    }, [])

    const result = myPlaceAgeTotalPay(["10대", "20대","30대","40대","50대"], [agePay.age_10, agePay.age_20,agePay.age_30,agePay.age_40,agePay.age_50])

    return (
        <div style={{width: '80%', position: 'relative' ,margin:'0 auto'}}>

            <Bar
                data={result}
            />
        </div>
    );
}

export default AgeDivisionPay;