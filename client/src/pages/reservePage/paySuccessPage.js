import React from "react";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import {Result, Button} from "antd";

//payinfo_id
function paySuccessPage(props) {


    const {payinfo_id} = props.location.state;
    console.log(props.location.state)
    return (
        <>
            <Header/>
            <Result
                status="success"
                title="예매 완료!"
                subTitle={`결제번호: [${payinfo_id}] 취소는 30분전까지 그 후는 새싹마켓에서 티켓양도가 가능합니다`}
                extra={[
                    <Button type="primary" key="console">
                        <Link to={"/"}>홈페이지로 가기</Link>
                    </Button>,
                ]}
            />
        </>
    );
}

export default paySuccessPage;
