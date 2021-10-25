import React from 'react';

import movieData from '../../data/movies.json';
import carouselItems from '../../data/carouselItems01';

import Carousel from "../../components/Carousel/Carousel";
import SectionMovies from "../../components/Home/SectionMovies";
import Layout from "../../components/layout/Layout";
import Movies from "../../components/Movies/Movies";

const movies = movieData.Movies.Items[0].Items;

const HomePage = () => {
    return (
        <Layout>
            <Carousel theme="dark" height={774} items={carouselItems} />
            <SectionMovies>
                <Movies theme="dark" movies={movies} activeNum={5} />
            </SectionMovies>

        </Layout>
    );
};

export default HomePage;