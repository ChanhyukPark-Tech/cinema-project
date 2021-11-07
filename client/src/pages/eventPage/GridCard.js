import React from "react";
import { Col } from "antd";

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/event/${props.eventId}`}>
          <img
            style={{ width: "100%", height: "320px" }}
            src={props.image}
            alt={props.eventName}
          />
        </a>
      </div>
      <h3>2021.11.01 ~ 2021.12.01</h3>
    </Col>
  );
}

export default GridCards;
