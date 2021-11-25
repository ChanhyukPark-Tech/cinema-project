import React, { useEffect, useState } from "react";
import { MarketContainer } from "./marketStyles";
import { Link } from "react-router-dom";
import { Button, Table, Tag } from "antd";
import Header from "../../components/header/Header";
import Title from "../../components/Title/Title";
import axios from "axios";

function MarketPage(props) {
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState("");
  const [memberId, setMemberId] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setMemberId(localStorage.getItem("member_id"));
    //console.log(userName);
  }, []);

  const deleteHandler = (marketPost) => {
    axios.post("/api/util/deleteMarketPost", {
      marketPost_id: marketPost,
    });
    axios.get("/api/util/marketPosts").then((data) => {
      setPosts(data.data);
    });
  };

  const columns = [
    {
      title: "날짜",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "작성자",
      dataIndex: "Nm",
      key: "Nm",
    },

    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      render: (text, index) => {
        return (
          <>
            <Link to={`/market/marketDetail/${index.marketPost_id}`}>
              {text}
            </Link>

            {memberId * 1 === index.member_id * 1 && (
              <Button
                onClick={(e) => deleteHandler(index.marketPost_id)}
                danger
              >
                글삭제
              </Button>
            )}
          </>
        );
      },
    },
    {
      title: "태그",
      key: "tag",
      dataIndex: "tag",
      render: (tag) => {
        let color = tag.length > 5 ? "geekblue" : "green";
        if (tag === "구매") {
          color = "volcano";
        }
        if (tag === "판매완료") {
          color = "darkgray";
        }
        return (
          <>
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    axios.get("/api/util/marketPosts").then((data) => {
      setPosts(data.data);
      console.log(posts);
    });
  }, []);

  return (
    <>
      <Header />
      <MarketContainer>
        <Title title={"새싹마켓"} />
        <Button style={{ marginBottom: "10px", borderColor: "#2c4b21" }}>
          <Link to={"/market/addPost"}>글작성</Link>
        </Button>

        <Table columns={columns} dataSource={posts} />
      </MarketContainer>
    </>
  );
}

export default MarketPage;
