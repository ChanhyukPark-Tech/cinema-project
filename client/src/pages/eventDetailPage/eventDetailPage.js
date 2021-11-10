import React, { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { events } from "../../data/eventPageDummyData";
import { BackColor } from "../eventPage/eventStyles";
import EventTitle from "../eventPage/EventTitle";
import { useRouteMatch } from "react-router-dom";

function EventDetailPage(props) {
  const match = useRouteMatch();

  return (
    <>
      <BackColor>
        <Header />
        <EventTitle title={events[match.params.id - 1].title} />

        <div
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <img
            alt={events[match.params.id - 1].title}
            src={events[match.params.id - 1].contentUrl}
          />
        </div>
      </BackColor>
      <Footer />
    </>
  );
}

export default EventDetailPage;
