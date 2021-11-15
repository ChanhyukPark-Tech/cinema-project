import React, {useEffect, useState} from "react";
import {
    BranchContainer,
    BranchListContainer,
    BranchName,
    BranchTitleContainer,
    LocalContainer,
    LocalName,
    MovieListContainer,
    ReserveContainer,
    ReserveEntireContainer,
    TimeListContainer,
} from "./reservePageStyles";
import Title from "../../components/Title/Title";
import {Steps} from "antd";

import Header from "../../components/header/Header";
import ReserveTimeList from "../../components/ReserveTimeList/ReserveTimeList";
import axios from "axios";
import ReserveMovieCard from "../../components/ReserveMovieList/ReserveMovieList";

function ReservePage(props) {
    const {Step} = Steps;
    const [divisions, setDivisions] = useState([]);
    const [places, setPlaces] = useState([])
    const [movies,setMovies] = useState([])
    const [step, setStep] = useState(0);

    const [localCode, setLocalCode] = useState("1");
    const [branchCode, setBranchCode] = useState(1);
    const [movieCode, setMovieCode] = useState(1);

    const divisionClickHandler = (cinemaDivison_id) => {
        axios.post('/api/util/place', {DetailDivisionCode: cinemaDivison_id}).then(data => {
            setPlaces(data.data)
        })
    }


    const placeClickHandler = (CinemaID) =>{
        axios.post('/api/reserve/getPlaceMovies',{CinemaID:CinemaID})
            .then(data => {
                setMovies(data.data)
                console.log(data.data)
            })
    }

    useEffect(() => {
        axios.get('/api/util/division')
            .then(data => {
                setDivisions(data.data)
            })
        axios.post('/api/util/place', {DetailDivisionCode: "1"})
            .then(data => {
                setPlaces(data.data)
            })


    }, [])
    const localClickHandler = (e, id) => {
        e.preventDefault();
        setLocalCode(id);
    };

    const branchClickHandler = (e, id) => {
        e.preventDefault();
        setBranchCode(id);
    };


    return (
        <>
            <Header/>
            <Title title={"예매하기"}/>
            <ReserveEntireContainer>
                <Steps current={step}>
                    <Step title="지역을 골라주세요" description="원하는 지역선택"/>
                    <Step title="지점을 골라주세요"/>
                    <Step
                        title="영화를 골라주세요"
                        description="관람을 원하는 영화 선택"
                    />
                    <Step
                        title="시간을 골라주세요"
                        description="관람을 원하는 시간 선택"
                    />
                </Steps>
                <ReserveContainer>
                    <BranchContainer>
                        <BranchTitleContainer>
                            <div>지역</div>
                            <div>지점</div>
                        </BranchTitleContainer>

                        <div style={{display: "flex", height: "90%"}}>
                            <LocalContainer>
                                {divisions.map((item) => (
                                    <LocalName
                                        active={localCode === item.DetailDivisionCode}
                                        onClick={(e) => {
                                            setStep(1);
                                            divisionClickHandler(item.DetailDivisionCode)
                                            localClickHandler(e, item.DetailDivisionCode);
                                        }}
                                    >
                                        {item.GroupNameKR}
                                        <span>({item.CinemaCount})</span>
                                    </LocalName>
                                ))}
                            </LocalContainer>
                            <BranchListContainer>
                                {
                                    places.map(item => {
                                        return <BranchName
                                            active={branchCode === item.CinemaID}

                                            onClick={(e) => {
                                                placeClickHandler(item.CinemaID);
                                                branchClickHandler(e, item.CinemaID)
                                            }
                                            }>
                                            {item.CinemaNameKR}
                                        </BranchName>
                                    })
                                }
                            </BranchListContainer>
                        </div>
                    </BranchContainer>
                    <MovieListContainer>
                        <div>영화 선택</div>
                        <div>
                            {/*{movies.map((movie) => (*/}
                            {/*  <ReserveMovieCard*/}
                            {/*    movieCode={movieCode}*/}
                            {/*    setMovieCode={setMovieCode}*/}
                            {/*    setStep={setStep}*/}
                            {/*    name={movie.name}*/}
                            {/*    grade={movie.grade}*/}
                            {/*    rating={movie.rating}*/}
                            {/*    imgUrl={movie.imgUrl}*/}
                            {/*    releasedDate={movie.releasedDate}*/}
                            {/*    mi={movie.mi}*/}
                            {/*  />*/}
                            {/*))}*/}
                        </div>
                    </MovieListContainer>
                    <TimeListContainer>
                        <div>시간표</div>
                        <div>
                            <ReserveTimeList
                                localCode={localCode}
                                branchCode={branchCode}
                                movieCode={movieCode}
                            />
                        </div>
                    </TimeListContainer>
                </ReserveContainer>
            </ReserveEntireContainer>
        </>
    );
}

export default ReservePage;
