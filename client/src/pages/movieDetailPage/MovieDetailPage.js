import React, { useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import GridCards from '../movieDetailPage/GridCard'; // 캐스팅정보를 담을 MovieDetail GridCard
import {GridCardStyle, BackColor } from './MovieDetailPageStyles'
import { Descriptions, Row }from 'antd';
import { useParams } from 'react-router';
import axios from 'axios';

function MovieDetailPage(props) {
    const params  = useParams();
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        axios.post('/api/movie/movieDetail',{RepresentationMovieCode : params.id})
        .then(data => {
            console.log(data.data[0]);
            setMovie(data.data[0])
        })
    },[])
    console.log(movie.PosterURL);
    return (
    <>
    <BackColor>
        <Header/>
        <Title title={"영화 상세정보"}/>

        <div style={{display:'flex', alignItems:'center'}}>
            { /* PosterImage */ }
            <div style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0)
                39%, rgba(0,0,0,0)
                41%, rgba(0,0,0,0.65)
                100%),
                url('${movie.PosterURL}'), #1c1c1c`,
                height: '500px',
                width: '300px',
                backgroundSize: '500px',
                backgroundPosition: 'center, center',
                position: 'relative'
            }}>
            </div>

            { /* Body */ }
            <div style={{width: '85%', margin: '1rem auto'}}>

                { /* 영화 상세정보 Description */ }
                <Descriptions bordered>
                    <Descriptions.Item>{movie.watchGradeName}세 이용가 <strong>{movie.movieNm}</strong></Descriptions.Item>
                    <Descriptions.Item label="관람객 평점">ㅇ.ㅇ점</Descriptions.Item>
                    <br />
                    <Descriptions.Item label="예매율"><strong>ㅇㅇ위</strong> ㅇㅇ%</Descriptions.Item>
                    <Descriptions.Item label="관객수">{movie.audiAcc}명</Descriptions.Item>
                    <br />
                    <Descriptions.Item> {movie.genre} / {movie.nations}</Descriptions.Item>
                    <Descriptions.Item>{movie.openDt} 개봉  | {movie.showTm}분</Descriptions.Item>
                    <br />
                    <Descriptions.Item label="감독">ㅇㅇㅇ </Descriptions.Item>
                    <Descriptions.Item label="출연">ㅇㅇㅇ, ㅇㅇㅇ, ㅇㅇㅇ </Descriptions.Item>
                    <br />
                    <Descriptions.Item label="성별 선호도">남성 ㅇㅇ%, 여성 ㅇㅇ%</Descriptions.Item>
                    <Descriptions.Item label="연령별 선호도">10대 ㅇㅇ% | 20대 ㅇㅇ% | 30대 ㅇㅇ% | 40대 ㅇㅇ%</Descriptions.Item>
                    <br />
                    <Descriptions.Item label="시놉시스">{movie.story} | 성별 선호도 | 연령별 선호도</Descriptions.Item>
                </Descriptions>
                <br />
                {/* Actors Grid --> 더미데이터 내 배우 프로필 사진과 이름 넣어주기*/}
                <GridCardStyle>
                    <Row gutter={[50,50]}>
                        {
                            
                        }
                    </Row>
                </GridCardStyle>
            </div>

        </div>
        <Footer/>
    </BackColor>
    </>
    );
};

export default MovieDetailPage