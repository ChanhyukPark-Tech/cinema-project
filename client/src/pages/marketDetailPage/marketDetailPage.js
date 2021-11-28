import React, { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { BackColor } from "../eventPage/eventStyles";
import { useParams } from "react-router-dom";
import { DetailInfoStyle, OneContentContainer } from "./marketDetailStyles";
import {
  MarketContainer,
  MarketTitleContainer,
} from "../marketPage/marketStyles";
import axios from "axios";
import { Input, Button } from "antd";

function MarketDetailPage() {
  const params = useParams();

  const [post, setPost] = useState([]);
  const [memberId, setMemberId] = useState(0);
  const [changeId, setChangeId] = useState("");
  const [payinfoId, setPayInfoId] = useState(0);

  const handleChange = (e) => {
    setChangeId(e.target.value);
    console.log(changeId);
  };

  useEffect(() => {
    axios
      .post("/api/util/marketPost", { marketPost_id: params.id })
      .then((data) => {
        setPost(data.data[0]);
        console.log(data.data[0]);
      });
  }, [params.id]);

  useEffect(() => {
    setMemberId(localStorage.getItem("member_id"));
  }, []);

  const changeIdHandler = (e) => {
    axios
      .post("/api/util/updateMarketPost", {
        member_id: changeId,
        payinfo_id: post.payinfo_id,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      });
  };

  return (
    <>
      <BackColor>
        <Header />
        <MarketTitleContainer>
          <h2>{post.title}</h2>
        </MarketTitleContainer>
        <MarketContainer>
          <DetailInfoStyle>
            <div style={{ width: "80%", margin: "3rem auto" }}>
              <table>
                <tbody>
                  <tr>
                    <th>작성자</th>
                    <td>{post.Nm}</td>
                    <th>작성일</th>
                    <td>{post.date}</td>
                    <th>연락처</th>
                    <td>{post.phoneNm}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>영화제목</th>
                    <td>{post.movieNm}</td>
                    <th>상영일자</th>
                    <td>
                      {post.ymd} {post.startDt}~{post.endDt}
                    </td>
                    <th>상영장소</th>
                    <td>
                      {post.theater_theater_id}지점 {post.place_place_id}관
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <OneContentContainer>
              <h3>내용</h3>
              <p>{post.content}</p>
            </OneContentContainer>
            <Input.Group compact>
              <Input
                style={{ width: "calc(100% - 800px)" }}
                placeholder="변경하려는 회원의 아이디를 입력해주세요"
                onChange={handleChange}
              />
              <Button type="primary" onClick={changeIdHandler}>
                변경하기
              </Button>
            </Input.Group>
          </DetailInfoStyle>
        </MarketContainer>
      </BackColor>
      <Footer />
    </>
  );
}

export default MarketDetailPage;
