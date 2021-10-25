import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Modal from 'react-modal';
import {CoolBlueButton} from "../marketPage/marketStyles";
import axios from "axios";
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

    const openModal = (e) => {
        const wantToFind = e.target.innerText
        axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=f5eef3421c602c6cb7ea224104795888&peopleNm=${wantToFind}`)
            .then(x =>{
                setPersonDetail(x.peopleListResult.peopleList[0])
                    console.log(x.peopleListResult.peopleList[0])
            }
            )
        setModalIsOpen(true)
    }

    return ( // href => to
        <>
            <div>{movieDetail[0]?.title} 에 대한 정보를 클릭하셨네요</div>
            <span onClick={openModal}>{movieDetail[0]?.person}</span>
            <Link to={`/movie/reserve/${movieDetail[0]?.movieInfo_id}`}>
                <CoolBlueButton>
                    예약하로가기
                </CoolBlueButton>
            </Link>
            <Link to={`/profile`}>
                <CoolBlueButton>
                    새로운테스트용
                </CoolBlueButton>
            </Link>

            <Modal style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
                }} isOpen={modalIsOpen}>
                {personDetail.peopleNm}
                {personDetail.peopleNmEn}
                {personDetail.repRoleNm}
                {personDetail.filmoNames}

                <button onClick={() => setModalIsOpen(false)}>Modal close</button>
            </Modal>
        </>
    );
}

export default MovieDetailPage;