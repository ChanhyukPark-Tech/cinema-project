import React from "react";
import { Col } from "antd";

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/:id${props.castId}`}>
          <img
            style={{ width: "100%", height: "320px" }}
            src={props.profile}
            alt={props.castName}
          />
        </a>
      </div>
      <h3>배우 이름</h3>
    </Col>
  );
}

export default GridCards;
