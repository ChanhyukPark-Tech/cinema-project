import React, {useState} from 'react';
import Header from "../../../components/header/Header";
import DayTotalPay from "./DayTotalPay";
import {Select, Radio} from 'antd';
import {SelectBarContainer} from "./salesPageStyles";
import GenderTotalPay from "./GenderTotalPay";
import AgeDivisionPay from "./AgeDivisionPay";

const {Option} = Select;

function SalesPage(props) {

    const [wantToSee, setWantToSee] = useState("dayTotalPay")

    const handleSizeChange = e => {
        setWantToSee(e.target.value);
    };

    return (
        <div style={{width:'90%', margin:'0 auto'}}>
            <Header/>
            <SelectBarContainer>
                <Radio.Group value={wantToSee} onChange={handleSizeChange}>
                    <Radio.Button value="dayTotalPay">일별 매출</Radio.Button>
                    <Radio.Button value="genderPay">성별별 매출</Radio.Button>
                    <Radio.Button value="agePay">나이대별 매출</Radio.Button>
                    <Radio.Button value="small">매점 상품별 매출</Radio.Button>
                </Radio.Group>

            </SelectBarContainer>
            {
                wantToSee === "dayTotalPay" && <DayTotalPay/>
            }


            {
                wantToSee === "genderPay" && <GenderTotalPay/>
            }
            {
                wantToSee === "agePay" && <AgeDivisionPay/>
            }

        </div>
    );
}

export default SalesPage;