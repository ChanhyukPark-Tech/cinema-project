import React, {useEffect, useState} from 'react';
import axios from "axios";
import {myPlaceGenderTotalPay} from "../adminMainPage/chartConfig";
import {Bar} from "react-chartjs-2";
import sessack from "../../marketPage/sproutChar.gif";
import sessackPink from "../../marketPage/sproutCharPink.gif";

function GenderTotalPay(props) {

    const [genderTotal, setGenderTotal] = useState([])

    useEffect(() => {
        axios.post('/api/admin/getPlaceGenderPay', {place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)})
            .then(res => {
                setGenderTotal(res.data[0])
            })
    }, [])

    const result = myPlaceGenderTotalPay(["여성", "남성"], [genderTotal.woman, genderTotal.man])


    const imagestyle = {
        height: "15vh",
        width: "15vw",
    };

    return (
        <div style={{width: '80%', position: 'relative' ,margin:'0 auto'}}>

            <Bar
                data={result}
            />
            <span style={{position:'absolute',top:'24vh',right:'10vw'}}>
                <img src={sessack} style={imagestyle} alt={sessack}/>
              </span>
            <span style={{position:'absolute',top:'0vh',left:'15vw'}}>
                <img src={sessackPink} style={imagestyle} alt={sessack}/>
              </span>
        </div>
    );
}

export default GenderTotalPay;