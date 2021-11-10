import React, {useEffect, useState} from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { BackColor } from "../eventPage/eventStyles";
import EventTitle from "../eventPage/EventTitle";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

function EventDetailPage(props) {
  const match = useRouteMatch();
  const [event,setEvent] = useState([]);

  useEffect(()=>{
      axios.post('/api/event/eventDetail',{event_id:match.params.id})
          .then(data => {
              setEvent(data.data[0])
              }
          )
  },[])
  return (
    <>
      <BackColor>
        <Header />
        <EventTitle title={event.eventNm} />

        <div
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <img
            src={event.contentUrl}
            alt={event.contentUrl}
          />
        </div>
      </BackColor>
      <Footer />
    </>
  );
}

export default EventDetailPage;
