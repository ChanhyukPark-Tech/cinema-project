import React, { useEffect, useState } from "react";
import carouselItems from "../../data/carouselItems01";
import eventItems from "../../data/carouselItems02";
import Carousel from "../../components/Carousel/Carousel";
import SectionMovies from "../../components/Home/SectionMovies";
import Movies from "../../components/Movies/Movies";
import Title from "../../components/Title/Title";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("/api/movie").then((data) => {
      setMovies(data.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Carousel theme="dark" height={774} items={carouselItems} />
      <Title title={"박스오피스 순위"} />
      <SectionMovies>
        <Movies theme="dark" movies={movies} activeNum={5} />
      </SectionMovies>
      <Title title={"진행중인 이벤트"} />
      <Carousel theme="dark" height={500} items={eventItems} />
      <Footer />
    </>
  );
};

export default HomePage;
