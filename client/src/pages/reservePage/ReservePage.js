import React, { useState } from "react";
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
import ReserveMovieCard from "../../components/ReserveMovieList/ReserveMovieList";
import Title from "../../components/Title/Title";
import { Steps } from "antd";

import Header from "../../components/header/Header";
import { local, branch, movies } from "../../data/reservePageDummyData";
import ReserveTimeList from "../../components/ReserveTimeList/ReserveTimeList";

function ReservePage(props) {
  const { Step } = Steps;

  const [step, setStep] = useState(0);

  const [localCode, setLocalCode] = useState(1);
  const [branchCode, setBranchCode] = useState(1);
  const [movieCode, setMovieCode] = useState(1);

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
      <Header />
      <Title title={"예매하기"} />
      <ReserveEntireContainer>
        <Steps current={step}>
          <Step title="지역을 골라주세요" description="원하는 지역선택" />
          <Step title="지점을 골라주세요" />
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

            <div style={{ display: "flex", height: "90%" }}>
              <LocalContainer>
                {local.map((item) => (
                  <LocalName
                    active={localCode === item.id}
                    onClick={(e) => {
                      setStep(1);
                      localClickHandler(e, item.id);
                    }}
                  >
                    {item.name}
                    <span>({item.num})</span>
                  </LocalName>
                ))}
              </LocalContainer>
              <BranchListContainer>
                {branch[localCode - 1].branches.map((item) => (
                  <BranchName
                    active={branchCode === item.bi}
                    onClick={(e) => {
                      setStep(2);
                      branchClickHandler(e, item.bi);
                    }}
                  >
                    {item.name}
                  </BranchName>
                ))}
              </BranchListContainer>
            </div>
          </BranchContainer>
          <MovieListContainer>
            <div>영화 선택</div>
            <div>
              {movies[branchCode - 1].movies.map((movie) => (
                <ReserveMovieCard
                  movieCode={movieCode}
                  setMovieCode={setMovieCode}
                  setStep={setStep}
                  name={movie.name}
                  grade={movie.grade}
                  rating={movie.rating}
                  imgUrl={movie.imgUrl}
                  releasedDate={movie.releasedDate}
                  mi={movie.mi}
                />
              ))}
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
