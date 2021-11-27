import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import {BackColor} from "./MovieDetailPageStyles";
import {Button, Comment, Descriptions, List, Form, Avatar, Input} from "antd";
import {useParams} from "react-router";
import axios from "axios";
import MainImage from "./MainImage";
import Modal from "react-modal";
import EventTitle from "../eventPage/EventTitle";
import {Rate} from 'antd';
import {FrownOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons';

const {TextArea} = Input;
const customIcons = {
    1: <FrownOutlined/>,
    2: <FrownOutlined/>,
    3: <MehOutlined/>,
    4: <SmileOutlined/>,
    5: <SmileOutlined/>,
};


// 영화진흥위원회 key fc7a2c4440818b39b9b1923fc8661d5e
function MovieDetailPage(props) {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [company, setCompany] = useState([]);
    const [people, setPeople] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [personFilmo, setPersonFilmo] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [genres, setGenres] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("")
    const [submitting] = useState(false);
    const [faceRate, setFaceRate] = useState(3);


    useEffect(() => {

        const getReviews = async (req, res) => {
            return await axios.post('/api/movie/reviewMovies', {RepresentationMovieCode: params.id})
        }
        const temp = [];

        getReviews().then(res => {
            res.data.map(oneReview => (
                temp.push({
                    author: oneReview.Nm,
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content: (
                        <p>
                            {oneReview.content}
                        </p>
                    ),
                    datetime: <p>⭐{oneReview.rating}</p>
                })
            ))
        })

        setReviews(temp);


    }, [params.id]);


    useEffect(() => {
        axios
            .post("/api/movie/movieDetail", {RepresentationMovieCode: params.id})
            .then((data) => {
                setMovie(data.data[0]);
                axios
                    .get(
                        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=fc7a2c4440818b39b9b1923fc8661d5e&movieCd=${data.data[0].KOFMovieCd}`
                    )
                    .then((data) => {
                        setGenres(data.data.movieInfoResult.movieInfo.genres);
                        setDirectors(data.data.movieInfoResult.movieInfo.directors);
                        setPeople(data.data.movieInfoResult.movieInfo.actors.slice(0, 10));
                        setCompany(data.data.movieInfoResult.movieInfo.companys);
                    });
            });
    }, [params.id]);

    const peopleClickhandler = (personName) => {
        setModalIsOpen(true);
        axios
            .get(
                `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=fc7a2c4440818b39b9b1923fc8661d5e&peopleNm=${personName}`
            )
            .then((data) => {
                setPersonFilmo(data.data.peopleListResult.peopleList[0].filmoNames);
            });
    };


    const handleChange = e => {
        setReviewText(e.target.value);
    }

    const handleSubmit = e => {
        /// 백엔드로ㅓ 보내
        // console.log(value)
        const current = new Date();
        const realMonth = current.getMonth() + 1;
        let regDate = current.getFullYear() +
            "-" +
            realMonth +
            "-" +
            current.getDate()
        const data = {
            RepresentationMovieCode: params.id,
            member_id: localStorage.getItem("member_id"),
            content: reviewText,
            regDt: regDate,
            rating: faceRate
        }

        axios.post('/api/movie/reviewMovieRatingUpdate', {data})
            .then(res => {
                alert(res.data.msg)
            }).catch((err) => {
            console.log(err.message)
        })


    }


    return (
        <>
            <BackColor>
                <Header/>
                <MainImage
                    image={`${movie.PosterURL}`}
                    title={movie.movieNm}
                    text={movie.openDt}
                />

                <div style={{display: "flex", alignItems: "center"}}>
                    {/* PosterImage */}

                    {/* Body */}
                    <div style={{width: "85%", margin: "1rem auto"}}>
                        {/* 영화 상세정보 Description */}
                        <Descriptions bordered>
                            <Descriptions.Item label="상영등급　">
                                {movie.watchGradeName}세 이용가{" "}
                            </Descriptions.Item>
                            <Descriptions.Item label="관람객 평점　　">
                                {movie.rate} 점
                            </Descriptions.Item>
                            <br/>
                            <Descriptions.Item label="관객수">
                                {movie.audiAcc}명
                            </Descriptions.Item>
                            <Descriptions.Item label="장르">
                                {" "}
                                {genres.map((genre) => {
                                    return genre.genreNm + "❤";
                                })}
                            </Descriptions.Item>
                            <br/>

                            <Descriptions.Item label="국가">
                                {" "}
                                {movie.nations}
                            </Descriptions.Item>
                            <Descriptions.Item label="상영시간">
                                {movie.showTm}분
                            </Descriptions.Item>
                            <br/>

                            <Descriptions.Item label="감독">
                                {directors.map((director) => director.peopleNm)}{" "}
                            </Descriptions.Item>
                            <Descriptions.Item label="출연">
                                {people.map((person) => {
                                    return (
                                        <React.Fragment key={person.peopleNm}>
                      <span
                          onClick={() => peopleClickhandler(person?.peopleNm)}
                      >
                        ▪{person.peopleNm}▪　
                      </span>
                                        </React.Fragment>
                                    );
                                })}
                            </Descriptions.Item>

                            <br/>
                            <Descriptions.Item label="제공사">
                                {company[0]?.companyNm}
                            </Descriptions.Item>
                        </Descriptions>
                        <br/>
                    </div>
                </div>
                <Modal
                    style={{
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                        },
                        content: {
                            position: "absolute",
                            width: "300px",
                            height: "300px",
                            top: "250px",
                            left: "600px",
                            border: "1px solid #ccc",
                            background: "#fff",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "20px",
                        },
                    }}
                    isOpen={modalIsOpen}
                >
                    {personFilmo}

                    <button onClick={() => setModalIsOpen(false)}>Modal close</button>
                </Modal>

                <Button style={{width: "30%", height: "79px", margin: "30px auto"}}>
                    바로예매하러 가기
                </Button>

                <EventTitle title={"리뷰"}/>
                <Rate allowHalf
                      onChange={value => {
                          setFaceRate(value)
                      }}

                      defaultValue={3} character={({index}) => {
                    return customIcons[index + 1]
                }}/> <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={reviewText}
                    />
                }
            />

                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={reviews}
                    renderItem={item => (
                        <li>
                            <Comment
                                avatar={item.avatar}
                                datetime={item.datetime}
                                author={item.author}
                                content={item.content}
                            />
                        </li>
                    )}
                />

                <Footer/>
            </BackColor>
        </>
    );
}


const Editor = ({onChange, onSubmit, submitting, value}) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

export default MovieDetailPage;
