import React, { useEffect, useState } from "react";

import { SmileOutlined } from "@ant-design/icons";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { BackColor } from "../eventPage/eventStyles";
import EventTitle from "../eventPage/EventTitle";
import { useRouteMatch, useParams } from "react-router-dom";
import { DetailInfoStyle, OneContentContainer } from "./marketDetailStyles";
import { MarketContainer } from "../marketPage/marketStyles";
import axios from "axios";

function MarketDetailPage(props) {
  const params = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .post("/api/util/marketPost", { marketPost_id: params.id })
      .then((data) => {
        console.log(data.data);
        setPost(data.data[0]);
      });
  }, []);

  return (
    <>
      <BackColor>
        <Header />
        <EventTitle title={post.title} />
        <MarketContainer>
          <DetailInfoStyle>
            <OneContentContainer>
              <h2>작성자</h2>
              <h3>{post.Nm}</h3>
            </OneContentContainer>
            <OneContentContainer>
              <h2>일시</h2>
              <h3>{post.date}</h3>
            </OneContentContainer>
            <OneContentContainer>
              <h2>글 제목</h2>
              <h3>{post.title}</h3>
            </OneContentContainer>
            <OneContentContainer>
              <h2>상세내용</h2>
              <p>{post.content}</p>
            </OneContentContainer>
            <OneContentContainer>
              <h2>영화제목</h2>
              <h3>{post.movieNm}</h3>
            </OneContentContainer>
            <OneContentContainer>
              <h2>장소 및 시간</h2>
              <h3>
                {post.ymd} 🤪 {post.startDt} ~ {post.endDt}
              </h3>
            </OneContentContainer>
          </DetailInfoStyle>
        </MarketContainer>
      </BackColor>
      <Footer />
    </>
  );
}

export default MarketDetailPage;
