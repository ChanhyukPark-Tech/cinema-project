import React from 'react';
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import EventTitle from "../../eventPage/EventTitle";

function FacilityPage(props) {
    return (
        <>
            <Header/>
            <EventTitle title={"시설관리"}/>


            <Footer/>
        </>
    );
}

export default FacilityPage;