import React from 'react';

import movieData from '../../data/movies.json';
import carouselItems from '../../data/carouselItems01';
import eventItems from "../../data/carouselItems02";
import Carousel from "../../components/Carousel/Carousel";
import SectionMovies from "../../components/Home/SectionMovies";
import Movies from "../../components/Movies/Movies";
import Title from "../../components/Title/Title";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

const movies = movieData.Movies.Items[0].Items;

const HomePage = () => {
    return (
        <>
            <Header/>
            <Carousel theme="dark" height={774} items={carouselItems}/>
            <SectionMovies>
                <Movies theme="dark" movies={movies} activeNum={5}/>
            </SectionMovies>
            <Title title={"진행중인 이벤트"} span={"진행중인 이벤트"}/>
            <Carousel theme="dark" height={500} items={eventItems}/>
            <Footer/>
        </>
    );
};

export default HomePage;
