import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Modal from 'react-modal';
import {Steps} from "antd";
import "antd/lib/steps/style/index.css";
import Title from "../../components/Title/Title";
import Header from "../../components/header/Header";
import {
    PosterImageContainer, SummaryTitleContainer, SummaryStatisticsContainer,
    SummaryDetailContainer, TabsContainer, SynopsisContainer, PreferenceContainer,
    GenderPreferenceContainer, AgePreferenceContainer, TrailerContainer,
    PosterContainer, CastingContainer, ScoreBoxContainer, ReviewBoxContainer,
    ReviewListContainer, MoreButtonContainer
} from "./MovieDetailPageStyles";
// MovieDetailPageDummyData에서 더미 데이터 import
import axios from "axios";
import { MovieDetailEntireContainer } from './MovieDetailPageStyles';

function MovieDetailPage(props) {
    const params = useParams();
    const [movieDetail, setMovieDetail] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [personDetail, setPersonDetail] = useState([]);
    const getMovieDetail = () => {
        return axios.post('http://localhost:4000/api/movie', {
            id: params.id
        }).then(x => {
            console.log(x)
            setMovieDetail(x)
        })
    }
    useEffect(() => {
        getMovieDetail()
    }, [])

    return ( // href => to
        <>
        <Header/>
        <Title title={"영화 상세 정보"}/>
        <MovieDetailEntireContainer>

        </MovieDetailEntireContainer>
        </>
    );
}

export default MovieDetailPage;