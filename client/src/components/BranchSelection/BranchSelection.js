import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BranchContainer, BranchContent, BranchSelectionContainer, DivisionContainer} from "./branchSelectionStyles";
import Location from "./Map";
import EventTitle from "../../pages/eventPage/EventTitle";
import {Button} from "antd";

function BranchSelection(props) {
    const [divisions, setDivisions] = useState([]);
    const [places, setPlaces] = useState([])
    const [curDivision, setCurDivision] = useState(1);
    const [curPlace, setCurPlace] = useState(1013);
    const [curPlaceItem, setCurPlaceItem] = useState([])

    useEffect(() => {
        axios.get('/api/util/divison').then(data => {
            setDivisions(data.data);
        })
        axios.post('/api/util/place', {DetailDivisionCode: 1}).then(data => {
            setPlaces(data.data)
        })
        axios.post('/api/util/placeDetail', {CinemaID: 1013}).then(data => {
            setCurPlaceItem(data.data[0])
        })


    }, [])

    const divisionClickHandler = (cinemaDivison_id) => {
        axios.post('/api/util/place', {DetailDivisionCode: cinemaDivison_id}).then(data => {
            setPlaces(data.data)
        })
        setCurDivision(cinemaDivison_id)
    }

    const placeClickHandler = (CinemaID) => {
        axios.post('/api/util/placeDetail', {CinemaID: CinemaID}).then(data => {
            setCurPlaceItem(data.data[0])
        })
        setCurPlace(CinemaID)
    }
    return (
        <BranchSelectionContainer>
            <DivisionContainer curDivision={curDivision}>
                {
                    divisions.map(division => (
                        <div key={division.DetailDivisionCode} style={{
                            cursor: 'pointer',
                            backgroundColor: division.DetailDivisionCode === curDivision ? '#145407' : 'transparent',
                            color: division.DetailDivisionCode === curDivision ? 'white' : ''
                        }} onClick={() => divisionClickHandler(division.DetailDivisionCode)}>
                            {division.GroupNameKR}({division.CinemaCount})
                        </div>
                    ))
                }
            </DivisionContainer>
            <BranchContainer>
                {
                    places.map(place => (
                        <span key={place.CinemaID} style={{
                            cursor: 'pointer',
                            backgroundColor: place.CinemaID === curPlace ? '#145407' : 'transparent',
                            color: place.CinemaID === curPlace ? 'white' : ''
                        }} onClick={() => placeClickHandler(place.CinemaID)}>
                            　{place.CinemaNameKR}　
                        </span>

                    ))
                }
            </BranchContainer>
            <EventTitle title={curPlaceItem.CinemaNameKR}/>
            <BranchContent>
                <div>
                    {curPlaceItem.CinemaAddrSummary}
                </div>
                <Location Latitude={curPlaceItem.Latitude} Longitude={curPlaceItem.Longitude}/>
                <Button>
                    <a href={'#!'} onClick={() => window.open(`https://m.map.naver.com/map.naver?lng=${curPlaceItem.Longitude}&lat=${curPlaceItem.Latitude}&level=1`)} >
                        실시간 길찾기
                    </a>
                </Button>
            </BranchContent>
        </BranchSelectionContainer>
    );
}

export default BranchSelection;