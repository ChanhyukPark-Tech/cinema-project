import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import GridCards from "./GridCard";
import { GridCardStyle, BackColor } from "./eventStyles";
import { Row } from "antd";
import EventTitle from "./EventTitle";
import { Input } from "antd";
import Fuse from "fuse.js";
import axios from "axios";
const { Search } = Input;

function EventPage(props) {


  const [data, setData] = useState([]);
  const [events,setEvents] = useState([]);

  useEffect(()=>{
    axios.get('/api/event/').then(data => {
      setEvents(data.data)
      setData(data.data)
      console.log(data.data)
    })
  },[])
  const handleEvent = (e) => {
    searchData(e.target.value);
  };

  const searchData = (pattern) => {
    if (!pattern) {
      setData(events);
      return;
    }
    const fuse = new Fuse(events, {
      keys: ["movieTitle"],
    });
    const result = fuse.search(pattern);

    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
    }
  };



  return (
    <>
      <BackColor>
        <Header />
        <EventTitle title={"December Event"} />
        <div
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <Search
            placeholder="영화를 검색해 보세요!"
            onSearch={(value) => console.log(value)}
            onChange={handleEvent}
            style={{ width: 200 }}
          />
        </div>
        <GridCardStyle>
          <Row gutter={[50, 50]}>
            {data &&
              data.map((event, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={event.imgUrl}
                    contentUrl={event.contentUrl}
                    eventId={event.event_id}
                    title={event.eventNm}
                    startDate={event.startDt}
                    endDate={event.endDt}
                  />
                </React.Fragment>
              ))}
          </Row>
        </GridCardStyle>
      </BackColor>
      <Footer />
    </>
  );
}

export default EventPage;
