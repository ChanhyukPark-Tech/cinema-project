import React, { useEffect, useState } from "react";
import { MarketContainer } from "./marketStyles";
import { Link } from "react-router-dom";
import { Button, Table, Tag } from "antd";
import { notices } from "./notice";
import Header from "../../components/header/Header";
import Title from "../../components/Title/Title";
import axios from "axios";

function MarketPage(props) {
  const [posts, setPosts] = useState([]);
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
          <Link to={`/market/marketDetail/${index.marketPost_id}`}>{text}</Link>
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
      console.log(data.data);
      setPosts(data.data);
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
