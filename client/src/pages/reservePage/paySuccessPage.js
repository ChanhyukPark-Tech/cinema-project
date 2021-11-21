import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { Result, Button } from "antd";

function paySuccessPage() {
  return (
    <>
      <Header />
      <Result
        status="success"
        title="예매에 성공하셨습니다!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
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
