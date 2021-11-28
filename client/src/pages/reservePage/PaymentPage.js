import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Input, Collapse } from "antd";
import axios from "axios";
import { getViewGradeIconOptions } from "../../util";
import ViewGradeIcon from "../../components/ViewGradeIcon/ViewGradeIcon";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Header from "../../components/header/Header";
import PayPal from "../../components/paypalButton/Paypal";
import Footer from "../../components/Footer/Footer";


const { Panel } = Collapse;
const { Search } = Input;

const StepBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const Section = styled.section`
  ${({ width }) => css`
    width: ${width}px;
  `}
`;

const TicketingInfo = styled.div`
  padding: 30px;
  height: 815px;
  border-right: 1px solid #ddd;

  img {
    width: 240px;
    margin: 0 auto;
    border-radius: 4px;
    margin-bottom: 30px;
  }

  .movie-title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & > span {
      font-size: 17px;
      font-weight: bold;
      margin-left: 4px;
    }
  }

  .detail-info {
    font-size: 11px;
    position: relative;

    .text {
      position: absolute;
      left: 40px;
    }
  }
`;

const PaymentMethod = styled.div`
  height: 815px;
  border-right: 1px solid #ddd;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;

  & > div {
    background: #414141;
    height: 54px;
    padding: 10px 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .price-desc {
      font-size: 13px;
    }

    span:nth-child(2) {
      font-size: 11px;
    }

    .price {
      font-family: "Roboto", "dotum", "sans-serif";
      font-size: 17px;
      font-weight: bold;
      margin-left: 8px;
      margin-right: 4px;
    }
  }

  & > div:first-child {
    border-top: none;
  }

  .btn-pay {
    background: #ff243e;
    height: 64px;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Noto Sans KR", "Roboto", "dotum", "sans-serif";
    font-size: 17px;
    color: #fff;
    cursor: pointer;
  }
`;

const PaymentPage = (props) => {
  const {
    schedule_schedule_id,
    RepresentationMovieCode,
    movieName,
    posterUrl,
    viewGradeCode,
    cinemaName,
    screenName,
    playDate,
    startTime,
    endTime,
    seatNoList,
    price,
    gender,
    place_id,
  } = props.location.state;
  const history = props.history;
  const [discountRate, setDiscountRate] = useState(0.0);
  const [discountCost, setDiscountCost] = useState(0);
  const [finalCost, setFinalCost] = useState(price);
  const [showSuccess,setShowSuccess] = useState(false);
  const promotionChangeHandler = (e) => {
    axios
      .post("/api/event/promotionCode", {
        promotionCode: e.target.value.replace(/(\s*)/g, ""),
      })
      .then((data) => {
        setDiscountRate(data.data[0]?.discountRate);
        setDiscountCost(data.data[0]?.discountRate * parseInt(price));
        setFinalCost(
          parseInt(price) - data.data[0]?.discountRate * parseInt(price)
        );
      });
  };

  let current = new Date();
  const realMonth = current.getMonth() + 1;
  const data = {
    payMethod: "페이팔",
    payDt:
      current.getFullYear() +
      "-" +
        realMonth +
      "-" +
      current.getDate(),
    originalPrice: price.replace(/,/g, ""),
    totalPrice: finalCost,
    member_member_id: localStorage.getItem("member_id"),
    RepresentationMovieCode: RepresentationMovieCode,
    schedule_schedule_id: schedule_schedule_id,
    seats: seatNoList,
    gender: gender,
    place_id: place_id,
  };

  const tranSuccess = async (payment) => {
    let payinfoId;
    axios.post("/api/payment/payComplete", data).then((res) => {
      payinfoId = res.data[0].payinfoId
    });
    setShowSuccess(true);

    setTimeout(() => {
      console.log("떳어요",payinfoId)
      history.push({
        pathname: "/movie/reserve/success",
        state: {payinfo_id: payinfoId}
      })
    }, 1000);
  };

  const viewGradeIconOptions = getViewGradeIconOptions(viewGradeCode);

  return (
    <>
      <Header />
      <StepBlock>
        <Section width={300}>
          <SectionTitle title="예매정보" />
          <TicketingInfo>
            <img src={posterUrl} alt="poster" />
            <div className="movie-title">
              <ViewGradeIcon
                size={22}
                color={viewGradeIconOptions.color}
                text={viewGradeIconOptions.text}
              />
              <span>{movieName}</span>
            </div>
            <div className="detail-info">
              <span>일시</span>
              <span className="text">{`${playDate}  ${startTime} ~ ${endTime}`}</span>
            </div>
            <div className="detail-info">
              <span>영화관</span>
              <span className="text">{`${cinemaName} ${screenName}`}</span>
            </div>
            <div className="detail-info">
              <span>인원</span>
              <span className="text">{seatNoList?.length}</span>
            </div>
            <div className="detail-info">
              <span>좌석</span>
              <span className="text">
                {seatNoList.map((seatNo) => seatNo.substring(0)).join(", ")}
              </span>
            </div>
          </TicketingInfo>
        </Section>
        <Section width={480}>
          <SectionTitle title="결제수단" />
          <Search
            placeholder="프로모션 코드를 입력해주세요!"
            allowClear
            enterButton="적용하기"
            size="large"
            //style={{ width: 300 }}
            //onSearch={onSearch}
            onChange={promotionChangeHandler}
          />

          <Collapse defaultActiveKey={["1"]}>
            <Panel header="할인금액" key="1">
              <h2 style={{ textAlign: "center" }}>
                💰
                {discountRate ? discountCost : 0}
              </h2>
            </Panel>
          </Collapse>
          <PaymentMethod></PaymentMethod>
        </Section>
        <Section width={420}>
          <SectionTitle title="결제하기" />
          <Payment>
            <div>
              <span className="price-desc">상품금액</span>
              <span>
                <span className="price">{price}</span>원
              </span>
            </div>
            <div>
              <span className="price-desc">할인금액</span>
              <span>
                <span className="price">{discountCost ? discountCost : 0}</span>
                원
              </span>
            </div>
            <div>
              <span className="price-desc">결제금액</span>
              <span>
                총<span className="price">{finalCost ? finalCost : price}</span>
                원
              </span>
            </div>

            <PayPal
              finalCost={finalCost ? finalCost : price}
              tranSuccess={tranSuccess}
            />
          </Payment>
        </Section>
      </StepBlock>
      <Footer />
    </>
  );
};

export default PaymentPage;
