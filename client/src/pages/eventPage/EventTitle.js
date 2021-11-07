import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { EventTitleStyle } from "./eventStyles";

function EventTitle({ title, span }) {
  return (
    <EventTitleStyle>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </EventTitleStyle>
  );
}

export default EventTitle;
