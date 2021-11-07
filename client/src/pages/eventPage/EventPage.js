import React, { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { events } from "../../data/eventPageDummyData";
import GridCards from "./GridCard";
import { GridCardStyle, BackColor } from "./eventStyles";
import { Row } from "antd";
import EventTitle from "./EventTitle";
import { Input } from "antd";
import axios from "axios";
import Fuse from "fuse.js";
const { Search } = Input;

function EventPage(props) {
  const [data, setData] = useState(events);

  const handleEvent = (e) => {
    searchData(e.target.value);
  };

  const searchData = (pattern) => {
    if (!pattern) {
      setData(events);
      return;
    }
    const fuse = new Fuse(events, {
      keys: ["title"],
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

  //  const [items, setItems] = useState();
  //   const handleButton = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3031/naver/getNaverMovie", {
  //         params: {
  //           query: query,
  //         },
  //       });
  //       if (res && res.status === 200) {
  //         const { data } = res;
  //         console.log(data);
  //         setItems(data.items);
  //       }
  //     } catch (e) {
  //       console.log("error ", e);
  //     }
  //   };

  return (
    <>
      <BackColor>
        <Header />
        <EventTitle title={"November Event"} />
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
                    eventId={event.id}
                    evnetName={event.title}
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
