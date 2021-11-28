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
                title="예매에 성공하셨습니다!"
                subTitle={`Order number: ${payinfo_id} Cloud server configuration takes 1-5 minutes, please wait.`}
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
