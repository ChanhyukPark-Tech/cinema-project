import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";
import { EventDateStyle } from "./eventStyles";

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <Link
          to={{
            pathname: `/event/${props.eventId}`,
            state: {
              title: props.title,
              contentUrl: props.contentUrl,
            },
          }}
        >
          <img
            style={{ width: "100%", height: "320px" }}
            src={props.image}
            alt={props.title}
          />
        </Link>
      </div>
      <EventDateStyle>
        <h3>{props.startDate + " ~ " + props.endDate}</h3>
      </EventDateStyle>
    </Col>
  );
}

export default GridCards;
